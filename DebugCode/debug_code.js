    
    function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let resultmul = multiply(num1, num2);
                    let resultadd = num1+num2
                    let resultdiv = num1/num2

                    // Display the result
                    displayResult(resultmul,resultdiv,resultadd);
                } else {
                    alert('Please enter valid numbers');
                }
            }

            function multiply(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;

                // Multiply the numbers
                return a * b;
            }

            function displayResult(resultmul,resultdiv,resultadd) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.innerHTML=`<p> Addition : ${resultadd}</p>`+`<p> Multiplication : ${resultmul}</p>`+`<p> Divison : ${resultdiv}</p>`;
            }
        