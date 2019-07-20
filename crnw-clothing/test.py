class Solution(object):
    def findDuplicates(self, nums):
        outputs = []
        for n in nums:
            value = abs(n) - 1
            print("Value: ", value)
            if nums[value] < 0:
                print("Nums Value: " + str(nums[value]))
                outputs.append(abs(n))
            else:
                nums[value] = nums[value] * -1
        return outputs


print(Solution().findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))
