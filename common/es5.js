
//es5 继承
;(function() {
  function extendsClass(Child, Father) {
    Child.prototype = Object.create(Father.prototype)
    Child.prototype.constructor = Child
    //继承父类的静态属性和方法
    Object.keys(Father).forEach(function (key) {
        Child[key] = Father[key]
    })
  }
  function People(name) {
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
      console.log(this.name + 'exam!!');
  }

  function Doctor(name,grade,paperNumber) {
    Student.apply(this, arguments)
    this.paperNumber = paperNumber
  }
  extendsClass(Doctor, Student)
  Doctor.prototype.writePaper = function() {
    console.log(this.name + ' write paper!!')
  }

  const doctor = new Doctor('es5', '博士二年级', 10)
  console.log(doctor.name) // es5
  console.log(doctor.grade) // 博士二年级
  console.log(doctor.paperNumber) // 10
  console.log(doctor.run()) // es5  run!!
  console.log(doctor.exam()) // es5  exam!!
  console.log(doctor.writePaper())// es5  write paper!!
})() 
