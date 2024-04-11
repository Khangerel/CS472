// question 1
const student = {
  firstName: "Anna",
  lastName: "Smith",
  grades: [],

  insertGrade(newGrade) {
    if (typeof newGrade === "number" && newGrade >= 0 && newGrade <= 100) {
      this.grades.push(newGrade); // Validate grade before pushing
    } else {
      console.error("Invalid grade. Please enter a number between 0 and 100.");
    }
  },

  computeAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const total = this.grades.reduce((acc, grade) => acc + grade, 0);
    return total / this.grades.length;
  },
};
student.insertGrade(85);
student.insertGrade(92);
const averageGrade = student.computeAverageGrade();
console.log(`Average grade: ${averageGrade.toFixed(2)}`);
// question 2
function Student(fn, ln, gpas) {
  this.firstName = fn;
  this.lastName = ln;
  this.grades = gpas;
}

Student.prototype.insertGrade = function (newGrade) {
  this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function () {
  console.log("this.grades :>> ", this.grades);
  if (this.grades.length === 0) {
    return 0;
  }

  // Calculate the sum of all the GPAs
  let sum = 0;
  for (let i = 0; i < this.grades.length; i++) {
    sum += this.grades[i];
  }

  // Calculate the average GPA
  let averageGPA = sum / this.grades.length;

  // Return the average GPA
  return averageGPA;
};

// question 3
Array.prototype.mySort = function () {
  return this.sort((a, b) => a - b); // Sort in ascending order
};

Student.prototype.display = function () {
  console.log(this.firstName + " " + this.lastName + " Grades: " + this.grades);
};

let stu1 = new Student("fstu1", "lstu1", [3, 5, 4]);
stu1.insertGrade(2);
stu1.display();
console.log("stu1.computeAverageGrade(); :>> ", stu1.computeAverageGrade());

// question 4
function Animal(n, s) {
    this.name = n;
    this.speed = s;
}

Animal.prototype.run = function () {
    this.speed = this.speed * 2;
}

Animal.compareBySpeed = function(a1, a2) {
    if(a1.fname > a2.fname) return 1;
    else if(a1.fname < a2.fname) return -1;
    else return 0;
}

let animal1 = new Animal("Horse", 32);
let animal2 = new Animal("Dog", 12);
let animal3 = new Animal("Bunny bunn", 30);

let arr = [animal1, animal2, animal3];
console.log('arr.sort():>> ', arr.sort((a, b) => a.speed - b.speed));

function Rabbit(n, s) {
    Animal.call(this, n, s);
}

Rabbit.prototype.hide = function() {
    console.log(this.name + " hides.");
}

Object.setPrototypeOf(Rabbit, Animal);
Object.setPrototypeOf(Rabbit.prototype, Animal.prototype);

let rabbit = new Rabbit("Bunny Bunn", 30);
rabbit.hide();