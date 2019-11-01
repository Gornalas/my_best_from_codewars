using System;

namespace localin{
public class Class1
{
        static void Main(){
            double n = 3;
            if(n < 0){
                Console.WriteLine("false");
            }
            double temp = Math.Pow(n,2);
            if(Convert.ToInt32(temp) == Convert.ToDouble(temp))
            {
                Console.WriteLine("true");
            }
            else
                Console.WriteLine("false");
        }
    }
}