function firstNonRepeatingLetter(s) {
    strForSearch = s.toLowerCase(); //if case is important
    for (var i = 0; i < strForSearch.length; i++) {
        var c = strForSearch.charAt(i);
        if (strForSearch.indexOf(c) == i && strForSearch.indexOf(c, i + 1) == -1) {
            return s[i];
        }
    }
    return '';
}
