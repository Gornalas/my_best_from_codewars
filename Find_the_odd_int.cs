using System.Linq;

namespace Solution
{
    class Kata
    {
        public static int find_it(int[] seq) 
        {
            foreach(int index in seq)
            {
                if(seq.Where(ch => ch == index).Count() % 2 == 1)
                return index;
            }
        return -1;
        }   
    }
}
