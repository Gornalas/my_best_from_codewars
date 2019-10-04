//Write a function that takes in a string of one or more words, 
//and returns the same string, but with all five or more letter words reversed 
//(Just like the name of this Kata). Strings passed in will consist of only letters and spaces. 
//Spaces will be included only when more than one word is present.


std::string spinWords(const std::string &str)
{
    std::string lookSpace, word, reversed;
    int lenStr = str.size() - 1;
    int globalIndex;
    
    for (globalIndex = 0; globalIndex <= lenStr; ++globalIndex){			//Start checking all string
        lookSpace = str[globalIndex];										
        if (lookSpace == " " || globalIndex == lenStr){
        	if (globalIndex != lenStr){										//Need plus last letter
            	int lenWord = word.size();
           		if (lenWord > 4){											//Reverse word if it has 5 letter or more
           			int index;      		
                	for (index = 1; index <= lenWord; ++index){
                		int indexWord = lenWord - index;
                		reversed += word[indexWord];
                	}
            		word.clear();
            	}
            	else{
            		reversed += word;										//If word less than 5 letter
            		word.clear();
            	}
            reversed += lookSpace;											//Add space at the end of reverse 
        	}
        	else{
        		word += lookSpace;											//Add last letter to word.
        		int lenWord = word.size();
           		if (lenWord > 4)
				{
           			int index;      		
                	for (index = 1; index <= lenWord; ++index){
                		int indexWord = lenWord - index;
                		reversed += word[indexWord];
                	}
            	word.clear();
            	}
            	else{
            		reversed += word;
            		word.clear();
            	}
        	}
        }
        else{
        	word += str[globalIndex];										//If lookSpase has a letter and it isn't last
        }
    }
	  return reversed;
}// spinWords
