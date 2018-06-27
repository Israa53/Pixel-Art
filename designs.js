// define variables
const createTable = document.getElementById('pixelCanvas');
let tableHeight =  $('#inputHeight');
let tableWidth =  $('#inputWidth');
let bgColor =  $('#colorPicker');
let btn = $('#submitB');
// When size is submitted by the user, call makeGrid()
btn.click(function(x){
  x.preventDefault();
  makeGrid();
});
//makeGrid function
function makeGrid() {
  // set width and height use .val()
  createTable.innerHTML = '';
  let H = tableHeight.val();
  let W = tableWidth.val();
  //set color background
  let submitEvent = function(box){
    //event for bgColor
    box.addEventListener('click' , function(){
      box.style.backgroundColor = bgColor.val();
    });
  }
  //draw the table by new insertRow & insertCell Func
    for (let x = 0; x < H; x++) {
        let rowx = createTable.insertRow(x);
        for (let y = 0; y < W; y++) {
            let box = rowx.insertCell(y);
          //event for the submit btn
            box.addEventListener('click', submitEvent(box));
        }
    }
}