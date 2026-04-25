let students = JSON.parse(localStorage.getItem("students")) || [];
let isEditMode = false;
let editIndex = null;

// Render table
function displayStudents() {
  const tableBody = document.getElementById("studentTableBody");
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    tableBody.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.dept}</td>
                <td><span class="badge bg-info">${student.grade || "N/A"}</span></td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="openEditModal(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteStudent(${index})">Delete</button>
                </td>
            </tr>
        `;
  });
}

// Open edit modal
function openEditModal(index) {
  isEditMode = true;
  editIndex = index;
  const student = students[index];

  document.getElementById("nameInput").value = student.name || "";
  document.getElementById("deptInput").value = student.dept || "";
  document.getElementById("gradeInput").value = student.grade || "";
  document.getElementById("modalTitle").innerText = "Edit Student";

  new bootstrap.Modal(document.getElementById("studentModal")).show();
}

// Delete student
function deleteStudent(index) {
  if (confirm("Delete this student?")) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
  }
}

// Form submit
document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudent = {
    name: document.getElementById("nameInput").value,
    dept: document.getElementById("deptInput").value,
    grade: document.getElementById("gradeInput").value || "N/A",
  };

  if (isEditMode && editIndex !== null) {
    students[editIndex] = newStudent;
    isEditMode = false;
    editIndex = null;
  } else {
    students.push(newStudent);
  }

  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
  bootstrap.Modal.getInstance(document.getElementById("studentModal")).hide();
  document.getElementById("studentForm").reset();
});

// Initial load
displayStudents();
