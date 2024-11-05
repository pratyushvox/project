const form = document.querySelector("form");
console.log(form);

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const result = document.querySelector("#result");

    if ( height === "" || isNaN(height) || height <= 0) {
        result.innerHTML = "Please enter a valid height." ;
    } else if (weight === "" || isNaN(weight) || weight <= 0) {
        result.innerHTML = "Please enter a valid weight.";
    } else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is: ${bmi}`;
    }
});
