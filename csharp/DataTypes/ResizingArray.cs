using System;

namespace DataTypes
{
    public class ResizingArray<T> : ICollection<T>
    {
        private T[] _data;

        public ResizingArray(int capacity)
        {
            Size = 0;
            Capacity = capacity;
            _data = new T[capacity];
        }

        public T this[int i] { get => _data[i]; set => _data[i] = value; }

        public int Size { get; private set; }
        public int Capacity { get; private set; }

        public void Add(T item)
        {
            // Resize to double size if array is full
            if (Size == Capacity) ResizeArray(2 * Capacity);
            _data[Size++] = item;
        }

        private void ResizeArray(int newCapacity)
        {
            T[] newArray = new T[newCapacity];
            for(int i = 0; i < Size; i++)
            {
                newArray[i] = _data[i];
            }
            _data = newArray;
            Capacity = newCapacity;
        }

        public bool IsEmpty() => Size == 0;

        public T Remove(int index)
        {
            throw new NotImplementedException();
        }

        public T[] ToArray() => _data;
    }
}
