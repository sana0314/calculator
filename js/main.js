
// for clear function
function clr(){
  document.getElementById("result").value = "";
};


// for display function
function display(val){
    document.getElementById("result").value+=val;
};


// for equate function
function equate(){
  let x = document.getElementById("result").value;
  let y = eval (x);
  document.getElementById("result").value = y;
};