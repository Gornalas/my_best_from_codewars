class Finance
{
  public:
  static unsigned long long finance(unsigned long long n){
      unsigned long long index = 0;
      unsigned long long result = 0;
      for (index = 0; index <= n; ++index){
          result += 3 * index * (index + 1) / 2;
      }
      return result;
  }
};
