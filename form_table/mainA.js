//Display form details in a table

const entry = document.querySelector('#input_entry');
const entireForm = document.querySelector(".form");
const table = document.querySelector("#table");
const regForm = document.querySelector('.regForm')


let row = 1;
const formDetails = (event) => {
    event.preventDefault();
    const firstName = document.querySelector("#firstName").value;
    const lastName = document.querySelector("#lastName").value;
    const age = document.querySelector("#age").value;
    const email = document.querySelector("#email").value;

    
    if (!firstName || !lastName || !age || !email) {
        alert("Please fill all fields");
        return;
    }   
    table.removeAttribute("hidden");

    const newRow = table.insertRow(row);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);


    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = age;
    cell4.innerHTML = email;

    row += 1;
    clearForm();

};

function clearForm() {
    regForm.reset();
}

entry.addEventListener("click", formDetails);
