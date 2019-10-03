//A friend of mine takes a sequence of numbers from 1 to n (where n > 0).
//Within that sequence, he chooses two numbers, a and b.
//He says that the product of a and b should be equal to the sum of all numbers in the sequence, excluding a and b.
//Given a number n, could you tell me the numbers he excluded from the sequence?

#include <vector>

using namespace std;

class RemovedNumbers
{
public:
  static vector<vector<long long>> removNb(long long n){
    vector<vector<long long>> retNumbers;     //result
    vector<long long> variant;                //for construction view
    long double a, b;
    
    long long sum = (n * (n + 1)) / 2;        //sum of [1, ... n]
    
    for (a = 1; a < n; ++a){
      b = (sum - a) / (a + 1);                //try to find b through brute force a 
      
      if (b <= n && b == int(b)){             //b must be integer and less or n
        variant.push_back(a); 
        variant.push_back(b);
        retNumbers.push_back(variant);
        
        variant.clear();
      }
    }
    return retNumbers;
  }
};
