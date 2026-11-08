// Student records for the grade calculator
const students = [
    // { id: 1, name: "Brian", marks: 85 },
    // { id: 2, name: "Sarah", marks: 72 },
    // { id: 3, name: "Kevin", marks: 45 },
    // { id: 4, name: "Mary", marks: 91 },
    // { id: 5, name: "David", marks: 58 },
    // { id: 6, name: "Faith", marks: 34 },
    // { id: 7, name: "James", marks: 67 },
    // { id: 8, name: "Grace", marks: 78 },
    // { id: 9, name: "Peter", marks: 49 },
    // { id: 10, name: "Ann", marks: 95 }
];

// Update new students
const newStudentName = document.getElementById("first-name")
const newStudentMarks = document.getElementById("marks")
const addButton = document.getElementById("add")
const errorElement = document.getElementById('error')
const studentsTable = document.getElementById("students")
const form = document.getElementById("form")
const calculateButton = document.getElementById("calculate")
const topStudentContainer = document.getElementById("top-student-element")
const summaryContainer = document.getElementById("summary")

//summary import
const totalStudentsElement = document.getElementById("total-students")
const classAverageElement = document.getElementById("class-average")
const passCountElement = document.getElementById("pass-count")
const passPercentageElement = document.getElementById("pass-percentage")
const failCountElement = document.getElementById("fail-count")
const failPercentageElement = document.getElementById("fail-percentage")
const topStudentNameElement = document.getElementById("top-student-name")
const topStudentMarksElement = document.getElementById("top-student-marks")
const topStudentGradeElement = document.getElementById("top-student-grade")

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

// Calculate students records
const getStudentsInfo = () => {
    return students.map((student) => {
        const studentGrade = checkGrade(student.marks)
        const passStatus = checkPass(student.marks)

        return {
            ...student,
            grade: studentGrade,
            status: passStatus
        }
    })
}

// Get highest marks studend and name
const highestPerformer = (students) => {
    if (students.length === 0) return { highestStudentName: "N/A", highestStudentMarks: 0, highestStudentGrade: "N/A" }

    const highestStudent = students.reduce(
        (max, current) => current.marks > max.marks ? current : max
    )

    return {
        highestStudentName: highestStudent.name,
        highestStudentMarks: highestStudent.marks,
        highestStudentGrade: highestStudent.grade
    }
}

// Gets the avearage
const classAverage = () => {
    const sumMarks = getStudentsInfo().reduce(
        (accumulator, currentValue) => accumulator + currentValue.marks, 0
    )

    const average = sumMarks / getStudentsInfo().length
    return average
}


// Update student table info
const addRow = (number, name, marks, grade, status) => {
    const row = document.createElement("tr")

    row.innerHTML = `
    <td>${number}</td>
    <td>${name}</td>
            <td>${marks}</td>
            <td>${grade}</td>
            <td><span>${status}</span></td>
            `

    studentsTable.appendChild(row)
}

const renderTable = () => {
    const studentsRecord = getStudentsInfo()
    studentsTable.innerHTML = ''
    if (studentsRecord.length === 0) {
        studentsTable.innerHTML = `
        <tr>
        <td colspan="5">No student record found</td>
        </tr>
        ` } else {
        studentsRecord.forEach(student => addRow(student.id, student.name, student.marks, student.grade, student.status))
    }
}
renderTable()

// Add new student
form.addEventListener("click", (e) => {
    const messages = []
    const newId = []
    const trimmedName = newStudentName.value.trim()

    const studentExists = students.some(student => 
        student.name.toLocaleLowerCase() === trimmedName.toLocaleLowerCase() && student.marks === +newStudentMarks.value
    )

    students.forEach((student) => {
        newId.push(student.id)
    })
    if (studentExists)  {
        messages.push(`Student ${trimmedName} already exists`)
    }

    if (trimmedName === '' || !isNaN(trimmedName)) {
        messages.push("Valid name is required")
    }

    if (newStudentMarks.value === '') {
        messages.push("Marks is required")
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    } else {
        errorElement.innerText = ''
        students.push({ id: Math.max(...newId) + 1, name: trimmedName, marks: +newStudentMarks.value })
        renderTable()
        // console.log(students)
        e.preventDefault()
    }
})

const renderSummary = () => {
    const studentInfo = getStudentsInfo()
    const average = classAverage().toFixed(1)
    const passedStudents = getStudentsInfo().filter(student => student.status === "Pass").length
    const failedStudents = getStudentsInfo().filter(student => student.status === "Fail").length
    const topStudent = highestPerformer(getStudentsInfo())


    totalStudentsElement.innerText = studentInfo.length
    classAverageElement.innerText = average
    passCountElement.innerText = passedStudents.toString().padStart(2, '0')
    failCountElement.innerText = failedStudents.toString().padStart(2, '0')
    passPercentageElement.innerText = `(${(passedStudents / studentInfo.length * 100).toFixed(1) }%)`
    failPercentageElement.innerText = `(${(failedStudents / studentInfo.length * 100).toFixed(1) }%)`
    topStudentNameElement.innerText = topStudent.highestStudentName
    topStudentMarksElement.innerText = topStudent.highestStudentMarks
    topStudentGradeElement.innerText = topStudent.highestStudentGrade
}


calculateButton.addEventListener('click', () => {
    renderSummary()
    topStudentContainer.style.display = 'flex'
    summaryContainer.style.display = 'flex'
})











// if (students.length === 0) {
    //     console.log("No student record found")
    // } else {
    //     console.log("========== STUDENT RESULTS ==========\n")
    //     console.table(getStudentsInfo())
    
    //     console.log("\n========== CLASS SUMMARY ==========\n")
    //     console.log(`Total Students: ${students.length}`)
    //     console.log(`Class Average: ${classAverage()}`)
    
    //     const topStudent = highestPerformer(getStudentsInfo())
    //     console.log(`Pass Count: ${passedStudents}`)
    //     console.log(`Fail Count: ${failedStudents}`)
    //     console.log(`Highest Performer: ${topStudent.highestStudentName} (${topStudent.highestStudentMarks})`)
    //     console.log(`Pass Rate: ${(passedStudents / getStudentsInfo().length) * 100}`)
    //     console.log(`Fail Rate: ${(failedStudents / getStudentsInfo().length) * 100}`)
    // }