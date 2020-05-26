using DataTypes;
using System;
using System.Diagnostics;

namespace csharp
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch stopwatch = new Stopwatch();
            int count = 100_000_000;

            Console.WriteLine($"LinkedList - {count} items");
            stopwatch.Start();
            var ll = new LinkedList<int>();
            for(int i = 0; i < count; i++)
            {
                ll.Add(i);
            }
            stopwatch.Stop();
            Console.WriteLine($"{stopwatch.ElapsedMilliseconds}");
            //foreach(var item in ll.ToArray())
            //{
            //    Console.WriteLine(item);
            //}

            Console.WriteLine($"ResizingArray - {count} items");
            stopwatch.Restart();
            var rl = new ResizingArray<int>(2);
            for (int i = 0; i < count; i++)
            {
                rl.Add(i);
            }
            stopwatch.Stop();
            Console.WriteLine($"{stopwatch.ElapsedMilliseconds}");
            //foreach (var item in rl.ToArray())
            //{
            //    Console.WriteLine(item);
            //}

            Console.ReadKey();
        }
    }
}
