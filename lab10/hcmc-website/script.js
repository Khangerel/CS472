"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // a.
  function createTableRow(patientData) {
    let row = document.createElement("tr");
    for (const data of patientData) {
      let cell = document.createElement("td");
      cell.textContent = data;
      row.appendChild(cell);
    }
    return row;
  }

  // Default patient data
  const defaultPatients = [
    [
      "EP-001-000001",
      "Ana",
      "J",
      "Smith",
      "5 January 1945",
      "Ear, Nose and Throat",
      "No",
    ],
    ["PP-001-000002", "Bob", "K", "Jones", "4 May 1985", "Cardiology", "Yes"],
    [
      "EP-001-000003",
      "Carlos",
      "A",
      "Hernandez",
      "13 March 1957",
      "Cardiology",
      "Yes",
    ],
  ];

  let tableBody = document.getElementById("tbodyPatientsList");

  for (const patientData of defaultPatients) {
    let row = createTableRow(patientData);
    tableBody.appendChild(row);
  }
  document
    .getElementById("btnRegisterPatient")
    .addEventListener("click", function (event) {
      event.preventDefault();

      let patientId = document.createElement("td");
      let patientIdStr = document.getElementById("patientIdNumber").value;
      let patientIdText = document.createTextNode(patientIdStr);
      patientId.appendChild(patientIdText);

      let fname = document.createElement("td"); //cell
      let fnameStr = document.getElementById("firstName").value;
      let fnameText = document.createTextNode(fnameStr);
      fname.appendChild(fnameText);

      let midini = document.createElement("td"); //cell
      let midiniStr = document.getElementById("middleInitials").value;
      let midiniText = document.createTextNode(midiniStr);
      midini.appendChild(midiniText);

      let lname = document.createElement("td"); //cell
      let lnameStr = document.getElementById("lastName").value;
      let lnameText = document.createTextNode(lnameStr);
      lname.appendChild(lnameText);

      let dob = document.createElement("td"); //cell
      let dobStr = document.getElementById("dateOfBirth").value;
      let dobText = document.createTextNode(dobStr);
      dob.appendChild(dobText);

      let ddld = document.createElement("td"); //cell
      let ddldStr = document.getElementById("ddlDepartment").value;
      let ddldText = document.createTextNode(ddldStr);
      ddld.appendChild(ddldText);

      let radio = document.createElement("td"); //cell
      let radioStr = document.querySelector(
        'input[name="radioIsOutPatient"]:checked'
      ).value;
      let radioText = document.createTextNode(radioStr);
      radio.appendChild(radioText);

      let row = document.createElement("tr");
      row.appendChild(patientId);
      row.appendChild(fname);
      row.appendChild(midini);
      row.appendChild(lname);
      row.appendChild(dob);
      row.appendChild(ddld);
      row.appendChild(radio);
      console.log("here :>> ", row);

      let tableBody = document.getElementById("tbodyPatientsList");
      tableBody.appendChild(row);
      document.getElementById("btnReset").click();
    });

  // b.
  function isElderly(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      return age - 1;
    }
    return age;
  }

  let showElderlyCheckbox = document.getElementById("chkElderlyPatients");
  showElderlyCheckbox.addEventListener("change", function (event) {
    let elderlyChecked = event.target.checked;
    let rows = tableBody.getElementsByTagName("tr");
    for (let row of rows) {
      let age = isElderly(row.children[4].textContent);
      if (elderlyChecked && age < 65) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }
  });
  // c.
  let showOutPatientsCheckbox = document.getElementById("chkShowOutPatients");
  showOutPatientsCheckbox.addEventListener("change", function (event) {
    let outPatientsChecked = event.target.checked;
    let rows = tableBody.getElementsByTagName("tr");
    for (let row of rows) {
      let isOutPatient = row.children[6].textContent.toLowerCase() === "yes";
      if (outPatientsChecked && !isOutPatient) {
        row.style.display = "none";
      } else {
        row.style.display = "";
      }
    }
  });
});
