function add_employee_function() {
    var info_table = document.getElementById("info_table");
    var first = document.getElementById("first_name");
    var last = document.getElementById("last_name");
    var email = document.getElementById("email");
    var doj = document.getElementById("doj");
    var dob = document.getElementById("dob");
    var blood_group = document.getElementById("blood_group");
    var pass = document.getElementById("pass");
    var address = document.getElementById("address");

    if(first.value=='' || last.value=='' || email.value=='' || doj.value=='' || pass.value=='' || dob.value=='' || blood_group.value=='' || address.value=='')
    {
        alert("Please provide all information");
        return;
    }
    
    var tr = document.createElement("tr");
    tr.className = "inside_row";
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(first.value+last.value));
    td2.appendChild(document.createTextNode(email.value));
    td3.appendChild(document.createTextNode(doj.value));
    var button = document.createElement("button");
    button.onclick = delete_employee;
    // button.onclick.apply(delete_employee,null);
    button.appendChild(document.createTextNode("Delete"));
    td4.appendChild(button);
    first.value = '';
    last.value='';
    email.value='';
    doj.value='';
    dob.value = '';
    blood_group.value = '';
    pass.value='';
    address.value='';
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    console.log(tr);
    info_table.appendChild(tr);
    
}

// function clicked(){
//     var items = document.getElementsByClassName("inside_row");
//     for (let i = 0; i < items.length; i++) {
//         items[i].addEventListener('click',delete_employee);
//     }

// }

function delete_employee(event) {
    if(confirm("Are you sure??"))
    {
        var tbody = event.target.parentElement.parentElement.parentElement;
        var tr = event.target.parentElement.parentElement
        tbody.removeChild(tr);
        alert("Employee is deleted");
    }       
}
