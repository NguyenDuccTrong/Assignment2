function ChangeColor() {
    document.body.style.backgroundColor = "Violet";
  }

function ChangeText() {
    document.getElementById("uni").innerHTML = "University of Information Technology"
    
}

function ChangeText2() {
    document.getElementById("uni2").innerHTML = "University of Information Technology"
}

$(document).ready(function () {
    $("#submit").click(function(event){
        $('#submit').val('Processing …');
        $('SubmitForm').submit();
    });  
});

function ageCalculator(){

    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } else {  
      
    var month_diff = Date.now() - dob.getTime();  
      
    var age_dt = new Date(month_diff);   
         
    var year = age_dt.getUTCFullYear();  
       
    var age = Math.abs(year - 1970);  
      
    return document.getElementById("result").innerHTML =    
             "Age is: " + age;  
    }  
}  


//5.

var bold_Items;
window.onload = getBold_items();
 
function getBold_items() 
{
  bold_Items = document.getElementsByTagName('strong'); 
}

function highlight() 
{
   for (var i=0; i<bold_Items.length; i++)
   {                                                    
    bold_Items[i].style.color = "blue";
    }
}


function return_normal()
{
  for (var i=0; i<bold_Items.length; i++) 
  {
       bold_Items[i].style.color = "black";
  }
}

//6

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
        
// put the result into a h1 tag
 document.getElementById('wh').innerHTML = "<h3>Width: " + w + " & Height: " + h + "</h3>";
}