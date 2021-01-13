const rotation = (input1, inputRotated) => {
    input1 += input1;
    return input1.includes(inputRotated)
}

console.log(rotation("amazon", "azonam"));

amazonamazon

O(n^2);
O(n);