using System;

namespace DataTypes
{
    public class LinkedList<T> : ICollection<T>
    {
        private LinkedListNode<T> _root;
        private LinkedListNode<T> _last;

        public LinkedList()
        {
            Size = 0;
        }

        public T this[int i] { get => GetNode(i).Value; set => GetNode(i).Value = value; }

        private LinkedListNode<T> GetNode(int index)
        {
            if (index < 0 || index >= Size || this._root == null)
            {
                throw new Exception("Index out of range.");
            }

            LinkedListNode<T> node = _root;

            while (index-- > 0)
            {
                node = node.Next;
            }

            return node;
        }

        public int Size { get; private set; }

        public void Add(T item)
        {
            if (_root == null)
            {
                _root = new LinkedListNode<T>(item);
                _last = _root;
            }
            else
            {
                _last.Next = new LinkedListNode<T>(item);
                _last = _last.Next;
            }

            Size++;
        }

        public bool IsEmpty() => Size == 0;

        public T Remove(int index)
        {
            if (index < 0 || index >= Size || this._root == null)
            {
                throw new Exception("Index out of range.");
            }

            LinkedListNode<T> previousNode = null;
            LinkedListNode<T> removedNode = this._root;

            while (index-- > 0)
            {
                previousNode = removedNode;
                removedNode = removedNode?.Next;
            }

            if (removedNode == null)
            {
                throw new Exception("Removed node was undefined. This should not happen.");
            }

            if (previousNode == null)
            {
                // Removing first item
                if (this._last == removedNode)
                {
                    this._last = null;
                    this._root = null;
                }
                else
                {
                    this._root = removedNode.Next;
                }
            }
            else if (removedNode.Next == null)
            {
                // Removing last item
                this._last = previousNode;
                previousNode.Next = null;
            }
            else
            {
                // Other cases
                previousNode.Next = removedNode.Next;
            }

            removedNode.Next = null;
            this.Size--;
            return removedNode.Value;
        }

        public T[] ToArray()
        {
            T[] arr = new T[Size];

            var temp = _root;
            for(int i = 0; i < Size; i++)
            {
                arr[i] = temp.Value;
                temp = temp.Next;
            }
            return arr;
        }
    }

    internal class LinkedListNode<T>
    {
        public T Value { get; set; }

        public LinkedListNode<T> Next { get; set; }

        public LinkedListNode(T value)
        {
            this.Value = value;
            this.Next = null;
        }
    }
}
