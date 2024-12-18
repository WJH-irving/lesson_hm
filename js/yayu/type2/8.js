console.log(1+'1');//输出: 11
console.log(+ "1");//输出：1
console.log(+[]);//输出：0 
console.log(+ ['1']);//输出：1 
console.log(+ ['1,2,3']);//输出： NaN
console.log(+{});//输出：NaN ({} => {} => [object Object] => NaN )
console.log([]+{});//输出： [object Object]
console.log({}+{});//输出：[object Object][object Object]
console.log(42 == ['42'])//输出: true
console.log(true == '2')//输出：false (当进行== 比较时 如果有一方是Boolean 则会对这一方的值进行ToNumber 再进行比较)
console.log(1 == "2")//输出：false (进行 == 比较时 只要有一方是数字，则将另一方转成数字再进行比较)