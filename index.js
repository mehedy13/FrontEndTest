function show_hide() {  
         var click = document.getElementById("list-items");  
         if(click.style.display ==="none") {  
            click.style.display ="block";  
         } else {  
            click.style.display ="none";  
         }  
      }  


//  function ColorChange(){
//  	const btn = document.getElementByClass('left-menu');

// btn.addEventListener('click', function onClick() {
//   btn.style.backgroundColor = 'red';
//   btn.style.color = 'red';
// });

// document.getElementById('colorChange').onclick = colorChange;   

//     function colorChange() {
//         document.body.style.color = "purple";
//         // return false;
//     }   

document.getElementById('colorChange').onclick = colorchange; 
var currentColor = "#7D7D7E";
function colorchange() { 
        if(currentColor == "#7D7D7E"){ 
           document.body.style.color = "green";
           currentColor = "green";
        } 
        else {
           document.body.style.color = "#7D7D7E";
           currentColor = "#7D7D7E";
        } 
    }