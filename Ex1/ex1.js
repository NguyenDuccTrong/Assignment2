  var today = new Date(); 
  var day = today.getDay();
  var dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.querySelector(".day").innerHTML = "Today is : " + dayList[day] + "."; 
  console.log("Today is : " + dayList[day] + ".");
  
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  
  var prepand = (hour >= 12)? " PM ":" AM ";
  hour = (hour >= 12) ? hour - 12: hour;
    if (hour===0 && prepand===' PM ') 
    { 
    if (minute===0 && second===0)
        { 
        hour=12;
        prepand=' Noon';
        } 
    else
        { 
        hour=12;
        prepand=' PM';
        } 
    } 
  if (hour===0 && prepand===' AM ') 
  { 
  if (minute===0 && second===0)
  { 
  hour=12;
  prepand=' Midnight';
  } 
  else
  { 
  hour=12;
  prepand=' AM';
  } 
  } 
  
document.querySelector(".time"). innerHTML = "Current Time : "+hour + prepand + " : " + minute + " : " + second;
//console.log("Current Time : "+ hour + prepand + " : " + minute + " : " + second);
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

//#Source https://bit.ly/2neWfJ2 
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});
console.log(parseCookie('foo=bar; equation=E%3Dmc%5E2'));

function myFunction() {
    var copyText = document.getElementById("myInput");
  
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
  }

  const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"Adam","age":20}'));
  console.log(isValidJSON('{"name":"Adam",age:"20"}'));
  console.log(isValidJSON(null));

