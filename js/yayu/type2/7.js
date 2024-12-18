// 只要不是数字， +  连接符
// 二元运算符
console.log([] + []);// 输出： （空字符串）
// 一元运算符 隐式类型转换 
console.log(+ [1,2,3])// 输出；NaN （先对[1,2,3]调用valueOf 得到[1,2,3]然后再调用toString获得1,2,3 这是一个简单数据类型但不是Number所以输出NaN）

console.log([]==[])// 输出: false (只要这两个对象所指向的地址不同就一定是false)

let x = 42
let y = {
    valueOf: function(){
        return 42
    }
}

console.log(x == y )// 输出：true