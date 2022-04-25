def first_non_repeating_letter(str):
    strLow = str.lower()
    for index in range(len(str)):
        if strLow.count(strLow[index]) == 1:
            return (str[index])
    return ""
