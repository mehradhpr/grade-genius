function addRow() {
  // Get the table element
  const table = document.getElementById("coursesTable");

  // Get input values
  const courseName = document.getElementById("courseName").value;
  const courseGrade = document.getElementById("courseGrade").value;
  const courseCredits = document.getElementById("courseCredits").value;

  if (courseName !== "" && courseGrade !== "" && courseCredits !== "") {
    // Create a new row and cells
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    // Add input values to the new cells
    cell1.innerHTML = courseName;
    cell2.innerHTML = courseGrade;
    cell3.innerHTML = courseCredits;

    // Clear the input fields
    document.getElementById("courseName").value = "";
    document.getElementById("courseGrade").value = "";
    document.getElementById("courseCredits").value = "";

  }

  
}

function calculateCWA() {
  const table = document.getElementById("coursesTable");

  let sum = 0;
  let count = 0;

  // iterate over the table elements to calculate the average
  for (let i = 1; i < table.rows.length; i++) {
    const gradeCell = table.rows[i].cells[1];
    const grade = parseFloat(gradeCell.textContent);
    const creditCell = table.rows[i].cells[2];
    const credits = parseFloat(creditCell.textContent);

    const courseValue = grade * credits;

    if (!isNaN(grade)) {
      sum += courseValue;
      count += credits;
    }
  }

  const average = sum / count;

  if (isNaN(average)) {
    document.getElementById("averageGrade").textContent = "Make sure the table is filled correctly!";
    document.getElementById("averageGrade").style = "color: red"
    return;
  }

  document.getElementById("averageGrade").textContent = "CWA: " + average.toFixed(2);
}
