// 使用class关键字来定义一个类
class Person {

  // 定义实例属性
  name: string = 'ts'

  // 这属性钱使用static关键字可以定义类属性（静态属性）
  static age: number = 23

  // readonly表示只读属性
  readonly gender = 'male'

  // 定义方法
  sayHi() {
    console.log('Hi');
  }

}

const per = new Person();

console.log(per);
console.log(Person.age);

// *****************************************
class Dog {
  name: string
  age: number

  // constructor 被称为构造函数
  // 构造函数会在对象创建时调用
  constructor(name: string, age: number) {
    // 在实例方法中,this就表示当前的实例
    // 在构造函数中,当前对象就是当前新建的那个对象
    // 可以通过this向新建的对象中添加属性
    this.name = name;
    this.age = age
  }
  bark() {
    console.log('wangwang');
  }
}

const dog = new Dog('wangcai', 2)
const dog2 = new Dog('dahuang', 3)

// *******************************************
// 定义一个父类
// 以abstract开头的类是抽象类：抽象类和其他类的区别不大，只是不能用来创建对象，抽象类就是专门用来被继承的类
abstract class Animal {
  name: string
  age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  run() {
    console.log('running');
  }
  // 以abstract开头的方法是抽象方法：抽象方法只能定义在抽象类中，子类必须对抽象方法进行重新
  abstract sayHi(): void
}

// 继承
class Cat extends Animal {
  // 子类覆盖父类的方法就是重写
  bark: string
  constructor(name: string, age: number, bark: string) {
    super(name, age)
    this.bark = bark
  }

  run(): void {
    console.log(`${this.name} is running`);
  }
}

// **************************************
// 接口定义一个类结构：用来定义一个类中应该包含哪些属性和方法，同时接口也可以当成类型声明去使用
interface myInter {
  name: string
  age: number
}

interface myInter {
  gender: string
}

const obj: myInter = {
  name: 'ts',
  age: 23,
  gender: 'male'
  nickName: 'th'
}

// 接口可以在定义类的时候去限制类的结构，接口中所有的属性都不能有实际的值，接口只定义对象的结构，而不考虑实际值，接口中的所有方法都是抽象方法

interface myInterface {
  name: string
  sayHi(): void
}

class MyClass implements myInterface {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): void {
    console.log('Hi');

  }
}

// **************************************************
// private 私有属性，只能在类内部进行访问（修改）
// protected 受保护的属性，只能在当前类和当前类的子类中访问
class P {
  private name: string
  private age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  // getName() {
  //   return this.name
  // }
  // getAge() {
  //   return this.age
  // }
  // setName(val: string) {
  //   this.name = val
  // }
  // setAge(val: number) {
  //   if (val > 0) {
  //     this.age = val
  //   }
  // }
  // TS中设置getter,setter方法的方式
  get _name() {
    return this.name
  }

  set _name(val: string) {
    this.name = val
  }

  get _age() {
    return this.age
  }

  set _age(val: number) {
    this.age = val
  }
}

const p1 = new P('ts', 23)
// p1.age = 18
// p1.setAge(18)
p1._age = 18

// 可以直接将属性定义在构造函数中
class P2 {
  constructor(public name: string) {
  }
}

const p2 = new P2('ts')

// ***************************************
// 在定义函数或是类时，如果遇到类型不明确就可以使用泛型
function fn<T>(a: T): T {
  return a
}
// 直接调用具有泛型的函数
fn('a');
// 指定泛型
fn<string>('a')

function fn2<T, K>(a: T, b: K): K {
  return b
}
fn2('a', 12)
fn2<string, number>('a', 12)

interface inter {
  length: number
}
function fn3<T extends inter>(a: T): number {
  return a.length
}
fn3([1, 23])