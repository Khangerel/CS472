let students = [
    {
        id: 4,
        name: "Alice",
        program: "Engineering",
    },
    {
        id: 5,
        name: "Eve",
        program: "Computer Science",
    },
    {
        id: 1,
        name: "Dave",
        program: "Computer Science",
    },
    {
        id: 2,
        name: "Bob",
        program: "Mathematics",
    },
    {
        id: 3,
        name: "Carol",
        program: "Computer Science",
    },

];

class Student {
    constructor(i, n, p) {
        this.id = i;
        this.name = n;
        this.program = p;
    }
    static getAllStudents() {
        return students.map((e) => e);
    }
    static getStudentById(id) {
        return students.find((s) => s.id == id);
    }
    static deleteById(id) {
        let index = students.findIndex((s) => s.id == id);
        let deletedStudent;
        if (index != -1) {
            deletedStudent = students[index];
            deletedStudent = students.splice(index, 1)[0];
        }
        return deletedStudent;
    }
    create() {
        let student = students.find((s) => s.id == this.id);
        if (!student) {
            students.push(this);
        }
        return student;
    }

    static updateById(id, name, program) {
        let index = students.findIndex((s) => s.id == id);
        let updatedStudent;
        if (index != -1) {
            updatedStudent = students[index];
            if (name) {
                updatedStudent.name = name;
            }
            if (program) {
                updatedStudent.program = program;
            }
        }
        return updatedStudent;
    }

    static getFilteredStudents(query) {
        let filtered = students;
        let keys = Object.keys(query);
        keys.forEach((k) => {
            const value = query[k];

            if (k == "sortBy") {
                if (value === "id") {
                    filtered.sort((a, b) => a.id - b.id);
                } else if (value === "name") {
                    filtered.sort((a, b) => a.name.localeCompare(b.name));
                } else if (value === "program") {
                    filtered.sort((a, b) => a.program.localeCompare(b.program));
                }
            } else {
                filtered = filtered.filter((s) => s[k] == value);
            }
        });
        return filtered.map((e) => e);
    }
}

module.exports = Student;
