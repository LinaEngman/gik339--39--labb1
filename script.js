const checkbox = document.getElementById('divStyle');
console.log(checkbox);

const textfields = document.querySelectorAll('.textField');
console.log(textfields);

const button = document.getElementsByTagName('button');
console.log(button);

const divBox = document.getElementById('divBox');
console.log(divBox);

function handleEvent(e) {
const name = e.target.name;
const value = e.target.value;
const html = `<p>Fältet ${name} har värdet ${value}</p>`;
divBox.insertAdjacentHTML('afterbegin', html);
}

//Event listener for the checkbox
checkbox.addEventListener("change", function () {
    const colorInput = document.getElementById("color");
    const colorValue = colorInput.value;
    divBox.style.backgroundColor = colorValue;
    if (colorValue.trim() !== ""){
        divBox.style.backgroundColor = colorValue;
    }
  });
  
  // Event listener for text fields
  textfields.forEach(function (textfield) {
    textfield.addEventListener("input", handleEvent);
    textfield.addEventListener("blur", handleEvent);
  });
  
  // Event listener for the button
  button[0].addEventListener("click", function () {
    divBox.remove(); // Remove the div element
  });
