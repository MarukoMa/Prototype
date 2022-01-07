# __proto__
分别使用es3、es5、es6方式实现 People、Student、Doctor三个类，并且后者需要继承前者
## explain

* es3  
* 创建一个不需要形参的函数ClassMiddle作为Child和Father之间的中间桥梁。

* es5  
* Object.create()方法实现继承,
* Object.keys()方法继承父类的静态属性和方法

* es6  
* Object.setPrototypeOf()


## other
### 原型链
* 使用构造函数来新建一个对象的(new)
* 对象的内部将包含一个指针,这个指针指向构造函数的 prototype 属性对应的值，这个指针称为对象的原型。
* 每一个构造函数的内部都有一个 prototype 属性，指向另一个对象
* 对象包含了可以由该构造函数的所有实例共享的属性和方法
* 访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。原型链的尽头一般来说都是 Object.prototype


### 原型链的特点：
* 原型链实现了继承。
* 利用原型让一个引用类型继承另一个引用类型的属性和方法
* JavaScript 对象是通过引用来传递的，
* 我们创建的每个新对象实体中并没有一份属于自己的原型副本。
* 当我们修改原型时，与之相关的对象也会继承这一改变。

* 优点    
  非常纯粹的继承关系，实例是子类的实例，也是父类的实例。子类可以访问父类新的原型方法和属性。

* 缺点    
  替换原型后需要重写方法。不能用对象字面量创建原型方法。
  原型链层级多层时,会导致效率变低,现在自身属性中查找,找到则返回,没有继续沿着__proto__这条链向上查找,没有怎返回undefuned
 

