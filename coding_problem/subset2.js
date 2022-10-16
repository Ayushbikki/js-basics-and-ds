var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const result = [];
    subsetsUtils(0, [],result);
    return result;
    function subsetsUtils (index, array,result) {
        result.push([...array]);
        for (let i = index; i < nums.length; i++) {
            if (i > index && nums[i] == nums[i - 1]) {
                continue;
            }
            array.push(nums[i]);
            subsetsUtils(i + 1, array,result);
            array.pop();
        }
    }
};
let num=[1, 2, 2]
let res;
res=subsetsWithDup(num)
console.log(res);