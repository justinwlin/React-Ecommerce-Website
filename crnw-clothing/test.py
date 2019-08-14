def solution(arr):
    maxCurrently = arr[0]
    maxSoFar = arr[0]

    for num in arr[1:]:
        maxCurrently = max(num, maxCurrently + num)
        maxSoFar = max(maxSoFar, maxCurrently)
    return maxSoFar


print(solution([4, -1, 2, 1]))
