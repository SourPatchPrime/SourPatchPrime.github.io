function Calculate(){
    var nums = [], range = 1000;
    var numToFizz = document.getElementById('num1').value;
    var numToBuzz = document.getElementById('num2').value;
    var result = document.getElementById('results');
    var fizz = 'fizz';
    var buzz = 'buzz';

    for(var i = 0; i < range; i++){
        nums[i] = i+1;
    }

    for(var x = 0; x < range; x++){
        if ((nums[x] % numToFizz == 0) && (nums[x] % numToBuzz == 0)) {
            nums[x] = (fizz + buzz + '<br />');
        } else if (nums[x] % numToBuzz == 0) {
            nums[x] = (buzz + '<br />');
        } else if (nums[x] % numToFizz == 0) {
            nums[x] = (fizz + '<br />');
        } else {
            nums[x] = (nums[x] + '<br />');
        }
    }
    result.innerHTML = nums.join("");
}



