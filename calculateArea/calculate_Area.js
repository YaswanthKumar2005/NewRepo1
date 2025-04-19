let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);
 let area = length * width;
 document.getElementById('result1').innerText = `The area of the rectangle is: ${area}`;
}

function groceryTracker() {
    let g1=parseFloat(document.getElementById("grocery1").value);
    let g2=parseFloat(document.getElementById("grocery1").value);
    let g3=parseFloat(document.getElementById("grocery1").value);    
    let total=g1+g2+g3;

    document.getElementById('result').innerText=`The total amount is ${total}`
}
 