using System.Globalization;

public class Kata
{
  public static string TitleCase(string phrase, string exception){
    //define language
    TextInfo myTI = new CultureInfo("en-US",false).TextInfo;
    if (exception == null){
      phrase = myTI.ToLower(phrase);
      return myTI.ToTitleCase(phrase);
    }
    exception = myTI.ToLower(exception);
    string[] exceptionArray = exception.Split(new char[] {' '});
    phrase = myTI.ToLower(phrase);
    string[] words = phrase.Split(new char[] {' '});
    // result for return from TitleCase
    string resultPhrase = "";
    foreach (string word in words){
      // First word always starts with a title letter
      if (resultPhrase == ""){
        resultPhrase += myTI.ToTitleCase(word);
        continue;
      }
      // In case exception
      bool checkException = false;
      foreach (string elementOfExceptionArray in exceptionArray){
        if (elementOfExceptionArray == word){
          resultPhrase += " " + word;
          checkException = true;
          break;
        }
      }
      if (!checkException)
        resultPhrase += " " + myTI.ToTitleCase(word);
    }
    return resultPhrase;
  }
  
  //override method for TitleCase(1)
  public static string TitleCase(string phrase){
    TextInfo myTI = new CultureInfo("en-US",false).TextInfo;
    phrase = myTI.ToLower(phrase);
    return myTI.ToTitleCase(phrase);
  }
}
