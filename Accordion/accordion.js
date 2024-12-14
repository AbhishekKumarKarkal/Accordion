function accordion_toggle(target) {
    //console.log("open");
   // console.log(target);
///create a reference to an element with the same 
//name as the target variable
var divstohide = document.getElementsByClassName("accordion-section");

for (var i = 0; divstohide.length>i; i++){
    divstohide.[i].style.display = none;
}

    var content = document.getElementById(target);
    //check if the content us currentky displayed
    if (content.style.display === "block") {
        //hide the content
        content.style.display = "none";
    } else {
        //display the content
        content.style.display = "block";
    }
    
        
    
}
