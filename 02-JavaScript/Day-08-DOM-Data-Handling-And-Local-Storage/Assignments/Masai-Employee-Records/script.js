let myForm = document.querySelector("form");

let employeeRecord = JSON.parse(localStorage.getItem("employeeRecord")) || [];

myForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let employee = {
        name: myForm.name.value,
        id: myForm.employeeID.value,
        department: myForm.department.value,
        experience: myForm.exp.value,
        email: myForm.email.value,
        mobile: myForm.mbl.value,
    };

    employeeRecord.push(employee);

    setData(employeeRecord);

    myForm.reset();

})


function setData(data) {
    localStorage.setItem("employeeRecord", JSON.stringify(data));
}