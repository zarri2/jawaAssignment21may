// <!----------------------------Question No #01  ------------------------------>
function string_check() {
    var str = document.getElementById("wordbar").value;
    if (str.startsWith ("Py")){
        document.getElementById("para1").innerHTML=str;
    }
    else{
        document.getElementById("para1").innerHTML="Py" + str;

    }
}
//<!----------------------------Question No #02  ------------------------------>
function removeChar(str, pos) {
    return str.slice(0, pos) + str.slice(pos + 1);
  }
function removeCharHandler() {
var originalString = document.getElementById("wordbar2").value;
var position = parseInt(document.getElementById("wordbar3").value); 

if (isNaN(position)|| position<0 || position>=originalString.length){
    document.getElementById("para2").innerHTML = `Invalid Position`;
    return;
}
var newString = removeChar(originalString, position);
document.getElementById("para2").innerHTML= newString;
}

//<!----------------------------Question No #03  ------------------------------>

function exchange() {
    var str = document.getElementById("wordbar4").value;
    if (str<1){
        document.getElementById("para3").innerHTML=`string must be atleast consist of a single character`;
    }
    if(str===1){
        return str;
    }
    var firstchar = str[0];
    var lastchar = str[str.length-1];

    
    var newstr = lastchar+str.slice(1,-1)+firstchar;
    
    document.getElementById("para3").innerHTML= newstr;

}
//<!----------------------------Question No #04  ------------------------------>
function exchange2() {
    var str1 = document.getElementById("wordbar5").value;
    if (str1<1){
        document.getElementById("para4").innerHTML=`string must be atleast consist of a single character`;
    }
    if(str1===1){
        return str1;
    }
    var firstchar = str1[0];
    

    
    var newstr = firstchar+str1+firstchar;
    
    document.getElementById("para4").innerHTML= newstr;

}

//<!----------------------------Question No #05  ------------------------------>
function multiple() {
    var num1 = document.getElementById("wordbar6").value;
    if (num1 % 3 === 0 &&  num1 % 7 === 0) {
        document.getElementById("para5").innerHTML = `The number is multiple of 3 and 7 both`;
    }   
    
    else if(num1 % 3 === 0){
        document.getElementById("para5").innerHTML=`The Number is the multiple of 3`;
    }
    else if (num1 % 7 === 0) {
        document.getElementById("para5").innerHTML=`The Number is the multiple of 7`;
    }
    
    else {
        document.getElementById("para5").innerHTML=`The number is not multiple of 3 or 7`;
    }
}

//<!----------------------------Question No #06  ------------------------------>
function add3char() {
    var char3 = document.getElementById("wordbar7").value;
    if (char3.length < 3) {
        document.getElementById("para6").innerHTML=`Character length must be at least 3`;
        return;
    }
    else (char3.length >= 3 ) 

    var lastchar = char3.slice (-3)
    var newstri =   lastchar+char3+lastchar ; 
    
    document.getElementById("para6").innerHTML =  newstri
}
    

