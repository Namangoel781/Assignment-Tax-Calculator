// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

function validateFields() {
  const grossIncome = document.getElementById("grossIncome").value;
  const extraIncome = document.getElementById("extraIncome").value;
  const deduction = document.getElementById("deduction").value;

  if (grossIncome === "" || extraIncome === "" || deduction === "") {
    alert("Please fill in all fields.");
  } else {
    calculateTax();
  }
}

function calculateTax() {
  const grossIncome = parseFloat(document.getElementById("grossIncome").value);
  const extraIncome = parseFloat(document.getElementById("extraIncome").value);
  const ageGroup = document.getElementById("ageGroup").value;
  const deduction = parseFloat(document.getElementById("deduction").value);

  const totalIncome = grossIncome + extraIncome - deduction;

  let taxRate;
  if (totalIncome >= 8) {
    switch (ageGroup) {
      case "<40":
        taxRate = 0.3;
        break;
      case "40-60":
        taxRate = 0.4;
        break;
      case ">=60":
        taxRate = 0.1;
        break;
    }

    const taxAmount = totalIncome * taxRate;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Total Income: ${totalIncome} Lakhs</p><p>Tax Rate: ${
      taxRate * 100
    }%</p><p>Tax Amount: ${taxAmount.toFixed(2)} Lakhs</p>`;
    modal.style.display = "block";
  } else {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `<p>Total Income: ${totalIncome} Lakhs</p><p>No tax applicable for income greater than 8 Lakhs.</p>`;
    modal.style.display = "block";
  }
}
