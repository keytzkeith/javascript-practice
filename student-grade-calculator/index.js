// Student records for the grade calculator
const students = [
    { id: 1, name: "Brian", marks: 85 },
    { id: 2, name: "Sarah", marks: 72 },
    // { id: 3, name: "Kevin", marks: 45 },
    { id: 4, name: "Mary", marks: 91 },
    { id: 5, name: "David", marks: 58 },
    { id: 6, name: "Faith", marks: 34 },
    { id: 7, name: "James", marks: 67 },
    { id: 8, name: "Grace", marks: 78 },
    { id: 9, name: "Peter", marks: 49 },
    { id: 10, name: "Ann", marks: 95 }
];

// Update new students
const newStudentName = document.getElementById("first-name")
const newStudentMarks = document.getElementById("marks")
const addButton = document.getElementById("add")
const form = document.getElementById("form")
const errorElement = document.getElementById('error')


addButton.addEventListener("click", (e) => {
    const messages = []
    const newId = []
    students.forEach((student) => {
        newId.push(student.id)
    })

    if (newStudentName.value === '' || newStudentName.value === null) {
        messages.push("Name is required")
    } else if (newStudentMarks.value === '' || newStudentMarks.value === null) {
        messages.push("Marks is required")
    } else {
        students.push({id: Math.max(...newId) + 1, name: newStudentName.value, marks: +newStudentMarks.value})
        console.log(students)
        e.preventDefault()
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else {
        errorElement.innerText = ''
    }
})


const checkGrade = (marks) => {
    if (marks > 100 || marks < 0) return "Invalid"
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
    if (marks > 100 || marks < 0) return "Invalid"
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
    if (students.length === 0) return { highestStudentName: "N/A", highestStudentMark: 0 }

    const highestStudent = students.reduce(
        (max, current) => current.marks > max.marks ? current : max
    )

    return {
        highestStudentName: highestStudent.name,
        highestStudentMark: highestStudent.marks
    }
}

// Gets the avearage
const classAverage = () => {
    const sumMarks = getStudentsInfo.reduce(
        (accumulator, currentValue) => accumulator + currentValue.marks, 0
    )

    const average = sumMarks / getStudentsInfo.length
    return average
}

const passedStudents = getStudentsInfo.filter(student => student.status === "Pass").length
const failedStudents = getStudentsInfo.filter(student => student.status === "Fail").length

if (students.length === 0) {
    console.log("No student record found")
} else {
    console.log("========== STUDENT RESULTS ==========\n")
    console.table(getStudentsInfo)

    console.log("\n========== CLASS SUMMARY ==========\n")
    console.log(`Total Students: ${students.length}`)
    console.log(`Class Average: ${classAverage()}`)

    const topStudent = highestPerformer(getStudentsInfo)
    console.log(`Pass Count: ${passedStudents}`)
    console.log(`Fail Count: ${failedStudents}`)
    console.log(`Highest Performer: ${topStudent.highestStudentName} (${topStudent.highestStudentMark})`)
    console.log(`Pass Rate: ${(passedStudents / getStudentsInfo.length) * 100}`)
    console.log(`Fail Rate: ${(failedStudents / getStudentsInfo.length) * 100}`)
}

// Update student table info
const studentsTable = document.getElementById("students")
const addRow = (number, name, marks, grade, status) => {
    const row = document.createElement("tr")

    row.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
            <td>${marks}</td>
            <td>${grade}</td>
            <td>${status}</td>
            `

    studentsTable.appendChild(row)
}
if (getStudentsInfo.length === 0) {
    studentsTable.innerHTML = `
    <tr>
    <td colspan="5">No student record found</td>
    </tr>
    ` } else {

    getStudentsInfo.forEach(student => addRow(student.id, student.name, student.marks, student.grade, student.status))
}