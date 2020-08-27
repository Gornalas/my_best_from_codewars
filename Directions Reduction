using System;
using System.Linq;
using System.Collections.Generic;

public class DirReduction {
  static bool checkExtraWay(string first, string second){
    if (first == "NORTH" && second == "SOUTH"){return true;}
    if (first == "SOUTH" && second == "NORTH"){return true;}
    if (first == "WEST" && second == "EAST"){return true;}
    if (first == "EAST" && second == "WEST"){return true;}
    return false;
  }
  
  public static string[] dirReduc(String[] arr){
    //need remove extra ways. Need list
    List<string> listDirections = arr.ToList();
    for(int i = 0; i + 2 <= listDirections.Count; i++){
      if (checkExtraWay(listDirections[i], listDirections[i + 1])){
        listDirections.RemoveRange(i, 2);
        //start over
        i = -1;
      }
    }
    return listDirections.ToArray();
  }
}
