function addRow() {
  // Get the table element
  const table = document.getElementById("coursesTable");

  // Get input values
  const courseName = document.getElementById("courseName").value;
  const courseGrade = document.getElementById("courseGrade").value;

  // Create a new row and cells
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // Add input values to the new cells
  cell1.innerHTML = courseName;
  cell2.innerHTML = courseGrade;

  // Clear the input fields
  document.getElementById("courseName").value = "";
  document.getElementById("courseGrade").value = "";
}
