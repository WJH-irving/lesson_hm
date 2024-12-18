var a = 1.23;
console.log(typeof a);// Number
var b = new Number(a);// Number 对象
console.log(typeof b)// Object 
console.log(b.toFixed(1));// "1.2"
// 面向对象极致风格 toFixed(a)
console.log(a.toFixed(1));// "1.2" 包装类    改行实际进行的是这个操作：(new Number(a)).toFixed; 在进行输出
//a 依然还是 Number 简单数据类型

