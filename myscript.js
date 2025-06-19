function showCourses(){
    alert("these are your courses");
    fetch("http://localhost:8080/courses")
    .then(response => response.json())
    .then((courses)=>{
         const dataTable=document.getElementById("coursetable")
         courses.forEach(course => {
            var row = `<tr>
            <td>${course.courseid}</td>
            <td>${course.coursename}</td>
            <td>${course.trainee}</td>
            <td>${course.durationofweeks}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
});
}
function showEnrolledStudents(){
    fetch("http://127.0.0.1:8080/courses/enrolled") //API End point
    .then((response) => response.json()) //Http response into json object
    .then((students) => {
        const dataTable = document.getElementById("enrolledtable")

        students.forEach(student => {
            var row = `<tr>
            <td>${student.name}</td>
            <td>${student.emailId}</td>
            <td>${student.coursename}</td>
            </tr>`

            dataTable.innerHTML+=row;
        });
    });
}