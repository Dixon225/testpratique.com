
  function computeMultipleSum(n){
$sum = 0;
$i = 1;
$n = prompt()
for ($i; $i < $n; $i++){ 
    if ($i % 3 === 0 || $i % 5 === 0 || $i % 7 === 0) 
    $sum +=$i;
    } 
}//return sum;

const res=computeMultipleSum($n);
console.log(res);