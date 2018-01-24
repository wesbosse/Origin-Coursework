using System;

namespace NumberPrinter
{
    class Program
    {
        static void Main(string[] args)
        {
            int counter = 1;
            while (counter <= 100)
            {
                if (counter % 3 == 0)
                {
                    Console.Write("Cameron");
                }
                if (counter % 5 == 0)
                {
                    Console.Write("Sean");
                }
                if (counter % 3 != 0 && counter % 5 != 0)
                {
                    Console.Write(counter);
                }
                Console.WriteLine();
                counter++;
            }
            Console.Write("Press Any Key to Exit");
            Console.ReadLine();
        }
    }
}
