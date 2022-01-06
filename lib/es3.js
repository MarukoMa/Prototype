//es3 继承 
;(function() {
  function extendsClass(Child,Father) {
    //继承父类中prototype中定义的实例属性和方法
    function  ClassMiddle() {
    }
    ClassMiddle.prototype = Father.prototype
    Child.prototype = new ClassMiddle()
    Child.prototype.constructor = Child
    //继承父类的静态属性和方法
    for(let staticPro in Father){
        if(Father.hasOwnProperty(staticPro)) {
            Child[staticPro] = Father[staticPro]
        }
    }
  
  }
  function People(name){
    this.name = name
  }
  People.prototype.run = function() {
    console.log(this.name + 'run!!')
  }
  
  
  function Student(name, grade) {
    People.call(this, name)
    this.grade = grade
  }
  extendsClass(Student, People)
  Student.prototype.exam = function() {
    console.log(this.name + 'exam!!')
  }
  
  function Doctor(name, grade, paperNumber) {
    Student.apply(this, [name, grade])
    this.paperNumber = paperNumber
  }
  extendsClass(Doctor, Student)
    Doctor.prototype.writePaper = function() {
    console.log(this.name + ' write paper!!')
  }
  
  const doctor = new Doctor('es3', '博士二年级', 10)
  console.log(doctor.name) // es3
  console.log(doctor.grade) // 博士二年级
  console.log(doctor.paperNumber) // 10
  console.log(doctor.run()) // es3  run!!
  console.log(doctor.exam()) // es3  exam!!
  console.log(doctor.writePaper()) // es3  write paper!!
})()
