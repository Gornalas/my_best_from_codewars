using System.Linq;

public class Kata
{
  public static string DuplicateEncode(string word)
  {
    string newWord = "";
    string letters = word.ToLower();
    
    foreach(char index in letters)
    {
      if(letters.Where(ch => ch == index).Count() > 1)
        newWord += ")";
      else
        newWord += "(";    
    }
    return newWord;
  }
}