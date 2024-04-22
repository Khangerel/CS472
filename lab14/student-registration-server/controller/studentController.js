const Student = require("../model/student");

let studentController = {
    getStudentById: (req, res) => {
        let id = req.params.id;
        if (id) {
            let student = Student.getStudentById(id);
            if (student) {
                res.json(200, student);
            } else {
                res.json(404, { message: "Not found" });
            }
        } else {
            res.json({ message: "Provide ID!" });
        }
    },

    getAllStudents: (req, res) => {
        if (Object.keys(req.query).length != 0) {
            //implement filter and sort method without sorting original array
            res.json(200, Student.getFilteredStudents(req.query));
        } else res.json(200, Student.getAllStudents());
    },

    deleteStudentById: (req, res) => {
        let id = req.params.id;
        if (id) {
            let student = Student.deleteById(id);
            if (student) {
                res.json(200, {
                    message: "Deleted a student with ID: " + student.id,
                });
            } else {
                res.json(404, { message: "Student not found!" });
            }
        } else {
            res.json({ message: "Please provide ID" });
        }
    },

    createStudent: (req, res) => {
        let { id, name, program } = req.body;
        if (id && name && program) {
            let student = new Student(id, name, program);
            let stu = student.create();
            if (stu) {
                res.json({ message: "Student is already registered!" });
            } else {
                res.json(200, { message: "Student is just registered" });
            }
        } else {
            res.json({ message: "Please provide all informations!" });
        }
    },

    updateStudent: (req, res) => {
        let { name, program } = req.body;
        let id = req.params.id;
        if (id) {
            let student = Student.updateById(id, name, program);
            if (student) {
                res.json(200, { message: "Updated a student with ID: " + id });
            } else {
                res.json(404, { message: "Student not found!" });
            }
        } else {
            res.json({ message: "Please provide ID" });
        }
    },
};

module.exports = studentController;
