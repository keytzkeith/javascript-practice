// Student records for the grade calculator
const students = [
    { id: 1, name: "Brian", marks: 85 },
    { id: 2, name: "Sarah", marks: 72 },
    { id: 3, name: "Kevin", marks: 45 },
    { id: 4, name: "Mary", marks: 91 },
    { id: 5, name: "David", marks: 58 },
    { id: 6, name: "Faith", marks: 34 },
    { id: 7, name: "James", marks: 67 },
    { id: 8, name: "Grace", marks: 78 },
    { id: 9, name: "Peter", marks: 49 },
    { id: 10, name: "Ann", marks: 95 }
];

const checkGrade = (marks) => {
    if (marks >= 80 && marks <= 100) {
        return "A"
    } else if (marks >= 70 && marks <= 79) {
        return "B"
    } else if (marks >= 60 && marks <= 69) {
        return "C"
    } else if (marks >= 50 && marks <= 59) {
        return "D"
    } else if (marks >= 0 && marks <= 49) {
        return "F"
    } else return null
}

const checkPass = (marks) => {
    if (marks >= 50 && marks <= 100) {
        return "Pass"
    } else if (marks >= 0 && marks <= 49) {
        return "Fail"
    } else return null
}

const getStudentsInfo = students.map((student) => {
    const studentGrade = checkGrade(student.marks)
    const passStatus = checkPass(student.marks)

    return {
        ...student,
        grade: studentGrade,
        status: passStatus
    }
})

// Get highest marks studend and name
const highestPerformer = (students) => {
    if (students.length === 0) return null

    const highestStudent = students.reduce((max, current) =>
        current.marks > max.marks ? current : max
    )

    return {
        highestStudentName: highestStudent.name,
        highestStudentMark: highestStudent.marks
    }
}

// Gets the avearage
const classAverage = () => {
    const marks = getStudentsInfo.map((student) => {
        return student.marks
    })
    if (marks.length === 0) return null
    const totalMarks = (total, mark) => {
        return total + mark
    }
    const average = marks.reduce(totalMarks) / marks.length
    return average
}

const passedStudents = getStudentsInfo.filter(student => student.status === "Pass").length
const failedStudents = getStudentsInfo.filter(student => student.status === "Fail").length

console.log("========== STUDENT RESULTS ==========\n")
// console.log(getStudentsInfo)
getStudentsInfo.forEach((student) => {
    console.log(`${(student.name).padEnd(6)} | ${student.marks} | ${student.grade} | ${student.status}`)
})


console.log("\n========== CLASS SUMMARY ==========\n")
console.log(`Total Students: ${students.length}`)
console.log(`Class Average: ${classAverage()}`)

const topStudent = highestPerformer(getStudentsInfo)
console.log(`Pass Count: ${passedStudents}`)
console.log(`Fail Count: ${failedStudents}`)
console.log(`Highest Performer: ${topStudent.highestStudentName} (${topStudent.highestStudentMark})`)