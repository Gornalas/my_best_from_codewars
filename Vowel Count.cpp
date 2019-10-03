#include <string>

using namespace std;

int getCount(const string &inputStr){
  int num_vowels = 0;
  //your code here
  for(const auto &iii: inputStr){
    if (iii == 'a' || iii == 'e' || iii == 'i' || iii == 'o' || iii == 'u')
      ++num_vowels;
    }
  return num_vowels;
}
