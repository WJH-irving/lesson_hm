console.log(Object.prototype.toString.call({a:1}));
console.log(Object.prototype.toString.call([1,2]));
console.log(String({a:1}),'{a:1}');// toString 原型链上的toString  
console.log(String([1,2]),'[1,2]');// 数组自己有toString方法 ，该方法是将数组中的每一项拿出来用逗号隔开
console.log(({a:1}).toString());// 调用的是原型链上的toString方法 该方法返回的是该对象的类型
console.log(JSON.stringify({a:1}));
console.log((function() {var a = 1;}).toString());// 调用的是函数上的 toString 方法，返回的是函数源代码
console.log(String(new Date(2024,12,18)));