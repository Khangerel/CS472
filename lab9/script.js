class Student {
  constructor(sid) {
    this.studentId = sid;
    this.answers = [];
  }
  addAnswer(question) {
    this.answers.push(question);
  }
}

class Question {
  constructor(id, a) {
    this.qid = id;
    this.answer = a;
  }

  checkAnswer(answer) {
    if (this.answer === answer) {
      return true;
    }
    return false;
  }
}

class Quiz {
  constructor(qs, sts) {
    this.questions = new Map(qs.map((q) => [q.qid, q.answer]));
    this.students = sts;
  }
  scoreStudentBySid(sid) {
    let score = 0;
    let student = this.students.find((stu) => stu.studentId === sid);
    if (student) {
      student.answers.forEach((q) => {
        if (this.questions.get(q.qid) === q.answer) {
          score++;
        }
      });
    }
    return score;
  }

  getAverageScore() {
    let scores = this.students.map((stu) =>
      this.scoreStudentBySid(stu.studentId)
    );
    let sum = scores.reduce((acc, curr) => acc + curr, 0);
    return sum / scores.length;
  }
}

const student1 = new Student(10);
student1.addAnswer(new Question(2, "a"));
student1.addAnswer(new Question(3, "b"));
student1.addAnswer(new Question(1, "b"));
const student2 = new Student(11);
student2.addAnswer(new Question(3, "b"));
student2.addAnswer(new Question(2, "a"));
student2.addAnswer(new Question(1, "d"));
const students = [student1, student2];
const questions = [
  new Question(1, "b"),
  new Question(2, "a"),
  new Question(3, "b"),
];
const quiz = new Quiz(questions, students);
let scoreforStudent10 = quiz.scoreStudentBySid(10);
console.log(scoreforStudent10); //Expected Result: 3
let scoreforStudent11 = quiz.scoreStudentBySid(11);
console.log(scoreforStudent11); //Expected Result: 2
let average = quiz.getAverageScore();
console.log(average); //Expected Reuslt: 2.5
