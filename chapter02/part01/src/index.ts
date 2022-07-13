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