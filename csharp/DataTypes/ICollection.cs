namespace DataTypes
{
    public interface ICollection<T>
    {
        int Size { get; }

        bool IsEmpty();

        void Add(T item);

        T Remove(int index);

        T this[int i] { get; set; }

        T[] ToArray();

    }
}
