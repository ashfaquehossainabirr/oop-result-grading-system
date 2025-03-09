const results = document.querySelector(".results")

class Student {
    constructor(id, name, email, marks) {
        this.id = id
        this.name = name
        this.email = email
        this.marks = marks
    }

    getStudentData() {
        if(this.marks > 40 && this.marks < 49) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: E)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else if(this.marks > 50 && this.marks < 59) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: D)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else if(this.marks > 60 && this.marks < 69) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: C)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else if(this.marks > 70 && this.marks < 79) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: B)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else if(this.marks > 80 && this.marks < 89) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: A)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else if(this.marks > 90 && this.marks < 100) {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="passed">(Grade: A+)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is passed.
                            </p>
                        </p>
                    `
        } else {
            return `
                        <p id="SID-${this.id}" class="student">
                            <p>
                                Student ID: <b>${this.id}</b>
                            </p>
                            <p>
                                Name: <b>${this.name}</b>
                            </p>
                            <p>
                                Total mark: ${this.marks} marks 
                                <span class="failed">(Grade: U)</span>
                            </p>
                            <p>
                                Student Contact Info: ${this.email}
                            </p>
                            <p>
                                Result: This student is Failed. Student should retake the exam.
                            </p>
                        </p>
                    `
        }
    }
}

const students = {
    student1: {
        id: 1023,
        name: "Ashfaque Hossain Abir",
        email: "ashfaquehossain@github.com",
        marks: 87
    },
    student2: {
        id: 1024,
        name: "Mohammed Sadeq",
        email: "mohammedsadeq@mail.com",
        marks: 67
    },
    student3: {
        id: 1025,
        name: "Ahsanullah Babu",
        email: "asanullababu@google.com",
        marks: 73
    },
    student4: {
        id: 1026,
        name: "Raihanul Al Nahian",
        email: "alnahian2003@github.com",
        marks: 43
    },
    student5: {
        id: 1027,
        name: "Yasin Chowdhury",
        email: "yasin2000@mail.com",
        marks: 37
    },
}

console.log(students)

const student1 = new Student(students.student1.id, students.student1.name, students.student1.email, students.student1.marks)
const student2 = new Student(students.student2.id, students.student2.name, students.student2.email, students.student2.marks)
const student3 = new Student(students.student3.id, students.student3.name, students.student3.email, students.student3.marks)
const student4 = new Student(students.student4.id, students.student4.name, students.student4.email, students.student4.marks)
const student5 = new Student(students.student5.id, students.student5.name, students.student5.email, students.student5.marks)

const studentLists = {
    student1,
    student2,
    student3,
    student4,
    student5
}

for(index in studentLists) {
    const student = studentLists[index]

    results.innerHTML += student.getStudentData()
}