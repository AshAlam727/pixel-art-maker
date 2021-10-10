// Defining variables with const and let
// Accessing the DOM using methods of the document object
// Declaring functions and attaching them to DOM objects as event listeners
// Writing nested loops and using loop variables


const selectColor = document.getElementById('colorPicker');  // Select color input
const selectSize = document.getElementById('sizePicker');    // Select size input
const newTable = document.getElementById('pixelCanvas');     // Select table input

selectSize.addEventListener('submit', function(event){       // add EventListner to the size Selector
    event.preventDefault();
    newTable.innerHTML = "";
    makeGrid();
});

newTable.addEventListener('click', function(evet){          // add EventListner
    evet.target.style.backgroundColor = selectColor.value;
});

function makeGrid() {                                       // fucntioin to create grid
    const height = document.getElementById('inputHeight');
    const width = document.getElementById('inputWidth'); 
        
    for (let row=1; row<=height.value; row++){
        var newRow = document.createElement('tr');
        for (let cell=1; cell<=width.value; cell++){
            var newCell = document.createElement('td');
            newRow.appendChild(newCell);
        }
        newTable.appendChild(newRow);
    }
    
};