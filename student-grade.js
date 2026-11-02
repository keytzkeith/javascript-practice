// Step 1. Create a function that accepts a student's marks and returns their grade.

// Step 2. Create a function that calculates the class average.

// Step 3. Find the student with the highest marks.

// Step 4. Find all students who passed(marks 50 and above).

// Step 5. Count how many students achieved each grade.

// Step 6. Generate a summary showing the class average, highest performer, pass count and grade distribution.
// New JavaScript concepts to explore
// This challenge is where I want you to experiment with:
// - .map() — transforming data.
// - .filter() — selecting specific records.
// - .reduce() — accumulating results.
// - .find() — locating an element.

// Use these grading rules:
// Marks	Grade
// 80–100	A
// 70–79	B
// 60–69	C
// 50–59	D
// 0–49	F

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

// Gets the marks
const studentsMarks = (students) => {
    const marks = []

    for (let i = 0; i < students.length; i++) {
        marks.push(students[i].marks)
    }
    return marks
}

const allStudentsName = (students) => {
    const studentsList = []

    for (let i = 0; i < students.length; i++) {
        studentsList.push(students[i].name)
    }
    return studentsList
}


// Gets the avearage
const classAverage = (marks) => {
    if (marks.length === 0) return null
    const totalMarks = (total, mark) => {
        return total + mark
    }
    const average = marks.reduce(totalMarks) / marks.length
    return average
}


const studentsNames = allStudentsName(students)
const marks = studentsMarks(students)
const grades = marks.map(checkGrade)
const passMark = marks.map(checkPass)

for (let i = 0; i < students.length; i++) {
    console.log(studentsNames[i])
    console.log(marks[i])
    console.log(grades[i])
    console.log(passMark[i])
}

const average = classAverage(marks)
// console.log(average)