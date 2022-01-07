
//es6 继承 
// function extendsClass(Child, Father) {
//     // Child.prototype.__proto__ = Father.prototype
//     // Child.__proto__ = Father
//     //继承父类prototype中定义的实例属性和方法
//     Object.setPrototypeOf(Child.prototype, Father.prototype)
//     //继承父类的静态属性和方法
//     Object.setPrototypeOf(Child, Father)
// }
// function People(name) {
//   this.name = name
// }
// People.prototype.run = function() {
//   console.log(this.name + 'run!!')
// }


// function Student(name, grade) {
//   People.call(this, name)
//   this.grade = grade
// }
// extendsClass(Student, People)
// Student.prototype.exam = function() {
//     console.log(this.name + 'exam!!')
// }

// function Doctor(name, grade, paperNumber) {
//   Student.apply(this,arguments)
//   this.paperNumber = paperNumber
// }
// extendsClass(Doctor, Student)
// Doctor.prototype.writePaper = function() {
//   console.log(this.name + ' write paper!!')
// }

// const doctor = new Doctor('es6', '博士二年级', 10)
// console.log(doctor.name) // es6
// console.log(doctor.grade) // 博士二年级
// console.log(doctor.paperNumber) // 10
// console.log(doctor.run()) // es6  run!!
// console.log(doctor.exam()) // es6  exam!!
// console.log(doctor.writePaper()) // es6  write paper!!

//Class 关键字 用法
;(function() { 
    class People{
        constructor(name) {
            this.name = name
        }
        run() {
            console.log(this.name + 'run!!')
        }
        static getStaticValue() {
            return People.staticValue;
        }
    }
    People.staticValue = "static value"
    
    class Student extends People{
        constructor(name, grade) {
            super(name)
            this.grade = grade
        }
        exam() {
            console.log(this.name + 'exam!!')
        }
    }
    class Doctor extends Student{
        constructor(name, grade, paperNumber) {
            super(name, grade)
            this.paperNumber = paperNumber
        }
        writePaper() {
            console.log(this.name + ' write paper!!')
        }
    }
    const doctor = new Doctor('es6', '博士二年级', 10)
    console.log(doctor.name) // es6
    console.log(doctor.grade) // 博士二年级
    console.log(doctor.paperNumber) // 10
    console.log(doctor.run()) // es6  run!!
    console.log(doctor.exam()) // es6  exam!!
    console.log(doctor.writePaper()) // es6  write paper!!
    
})()
