//es3 继承
function People(name){
  this.name = name;
}
People.prototype.run = function(){
  console.log(this.name + 'run!!')
}

function Student(name,grade){
  People.call(this,name)
  this.grade = grade
}

Student.prototype = new People();
Student.prototype.constructor = Student;
Student.prototype.exam = function(){
    console.log(this.name + 'exam!!');
};


function Doctor(name,grade,paperNumber){
  Student.apply(this,[name,grade])
  this.paperNumber = paperNumber
}

Doctor.prototype = new Student();
Doctor.prototype.constructor = Doctor;
Doctor.prototype.writePaper = function(){
  console.log(this.name + ' write paper!!')
}
// 最终要求
const people = new People('张三');

const student = new Student('张三', '博士二年级');

const doctor = new Doctor('张三', '博士二年级', 10);

console.log(doctor.name); // 张三
console.log(doctor.grade); // 博士二年级
console.log(doctor.paperNumber); // 10
console.log(doctor.run()); // 张三  run!!
console.log(doctor.exam()); // 张三  exam!!
console.log(doctor.writePaper()); // 张三  write paper!!

