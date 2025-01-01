let students = [];

// Handle Admission Form Submission
document.getElementById("admissionForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value;
    const studentRoll = document.getElementById("studentRoll").value;
    const studentCourse = document.getElementById("studentCourse").value;

    const newStudent = {
        name: studentName,
        rollNumber: studentRoll,
        course: studentCourse,
        feesStatus: 'Unpaid',
        feesAmount: 0,
    };

    students.push(newStudent);
    displayStudentData();
    document.getElementById("admissionForm").reset();
});

// Handle Fees Form Submission
document.getElementById("feesForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const rollNumber = document.getElementById("rollNumber").value;
    const feesAmount = parseFloat(document.getElementById("feesAmount").value);
    const feesStatus = document.getElementById("feesStatus").value;

    const student = students.find(s => s.rollNumber === rollNumber);
    if (student) {
        student.feesAmount = feesAmount;
        student.feesStatus = feesStatus;
        displayStudentData();
        document.getElementById("feesForm").reset();
    } else {
        alert("Student not found!");
    }
});

// Display Student Data in the Table
function displayStudentData() {
    const studentTableBody = document.getElementById("studentTable").getElementsByTagName("tbody")[0];
    studentTableBody.innerHTML = "";

    students.forEach(student => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.rollNumber}</td>
            <td>${student.course}</td>
            <td>${student.feesStatus}</td>
            <td>${student.feesAmount ? '$' + student.feesAmount.toFixed(2) : '-'}</td>
        `;

        studentTableBody.appendChild(row);
    });
}
// JavaScript Document