//Given a string of words, you need to find the highest scoring word.
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//You need to return the highest scoring word as a string.
//If two words score the same, return the word that appears earliest in the original string.
//All letters will be lowercase and all inputs will be valid.

#include <string>

std::string highestScoringWord(const std::string &str)
{
    int index;
    
    //for result
    std::string wordToReturn = "";
    int priceWordToReturn = 0;
	  
    //for test
    std::string potencialWord = "";
    int pricePotencialWord = 0;
	  
    //find space between words
    std::string lookSpace = "";
    
    for (index = 0; index < str.size(); ++index){
    	lookSpace = str[index];
        if (lookSpace != " "){							  
			potencialWord += str[index];				//fulling testing string by letters
			pricePotencialWord += str[index] - 96;
        }
        else{											//When space has founded, test is started
			if (priceWordToReturn < pricePotencialWord){
				wordToReturn = potencialWord;			//positive test change final word
				priceWordToReturn = pricePotencialWord;
			}
        	//clear all after test    
		  	potencialWord.clear();
		  	pricePotencialWord = 0;
		}
        //It has not space after last word, but test must be done.
        if (index == (str.size() - 1)){
            if (priceWordToReturn < pricePotencialWord){
			         	wordToReturn = potencialWord;
				        priceWordToReturn = pricePotencialWord;
			}
		}
  	}
    return wordToReturn;
}
