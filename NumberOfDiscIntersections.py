def solution(A):
    rightBorder = sorted([point + rad for point, rad in enumerate(A)])
    leftBorder = sorted([point - rad for point, rad in enumerate(A)])

    actualPoint = 0
    counter = 0
    for arrayPoint, rightBorderOfPoint in enumerate(rightBorder):
        while actualPoint < len(rightBorder) and rightBorderOfPoint >= leftBorder[actualPoint]:
            counter += actualPoint - arrayPoint
            actualPoint += 1
        if counter > 10**7 : return -1

    return counter
