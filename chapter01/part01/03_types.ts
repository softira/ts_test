// 可以直接使用字面量进行类型声明
let a: 10;
a = 11

// 可以使用|来连接多个类型（联合类型）
let b: "male" | "female";
b = "male"
b = "female"

let c: boolean | string
c = true
c = 'hello'

// any表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d:any

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any（隐式的any）
let d
d = 10
d = true
d = 'hello'

// unknow表示未知类型的值
let e: unknown;
e = 10
e = true
e = 'hello'

let s: string;

// d的类型为any，它可以赋值个任意变量
s = d

// unknown实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
s = e

if (typeof e === 'string') {
  s = e
}

// 类型断言，可以用来告诉解析器变量的实际类型
s = e as string;
s = <string>e
s = e

// void用来表示空，以函数为例，就表示没有返回值的函数
function fn_1(): void {
}
function fn_2(): void {
  return undefined
}
function fn_3(): void {
  return null
}
function fn_4(): void {
  return 'hello'
}

// never 表示永远不会返回结果
function fn2(): never {
  throw new Error('error')
}

export default void 0