// object表示一个js对象
let a: object;
a = {}
a = function () {
}

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名:属性值}
// 这属性名后边加上?，表示属性是可选的
let b: { name: string, age?: number };
b = { name: 'ts', age: 23 }

// [propName: string]: any表示任意类型属性
let c: { name: string, [propName: string]: any };
c = { name: 'ts', age: 23, gender: 'male' }

// 设置函数结构的类型声明
// (形参：类型,...)=>返回值类型
let d: (a: number, b: number) => number
d = function (n1: string, b2): number {
  return 10
}

// xxx[] 表示xxx类型数组
// Array<xxx> 表示xxx类型数组
let e: string[]
e = ['a', 'b', 'c']

let f: number[]
f = [1, 2, [3]]
f = [1, 2, '3']
f = [1, 2, 3]

let g: Array<number>
g = [1, 2]
g = f
g = e

// 元组，元组就是固定长度的数组
let h: [string, number]
h = ['hello']
h = ['hello', 12]
h = ['hello', 12, 2]

// enum 枚举
enum Gender {
  // Male = 1,
  // Female = 0
  Female,
  Male
}

let i: { name: string, gender: Gender }
i = { name: 'ts', gender: Gender.Male } // 1:male,2:female

console.log(i.gender === Gender.Male);

// &表示与
let j: { name: string } & { age: number }
j = { name: 'ts' }
j = { name: 'ts', age: 18 }
j = { name: 'ts', age: 18, gender: 'male' }

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType

k = 2
k = 4
k = 6

export default void 0