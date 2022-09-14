
// Global variable
var op; // UN now console.log(op);
var number1; // UN now console.log(number1);
var number2; // UN now console.log(number2);

// that is for All Numbers
function btnNumber(e) {
    var txt = document.getElementById('txtResult'); // find the input's ID
    txt.value += e.innerHTML; // Give value and append this tag that have a nummber , that tings that inner HTML is on tag
    // console.log(e);
    // console.log(e.innerHTML);
}


// For addition + , subtraction - , division / , deletion
function opertion(e) {
    // console.log(e);


    op = e.innerHTML;  //  go let's the operation , Give the + , - , / , del
    // console.log(op);

    var txt = document.getElementById('txtResult'); //// find the input's ID
    // console.log(txt);

    // convert the our input that have numbers and go string => number 
    number1 = parseInt(txt.value);
    // number2 = txt.value;
    // number3 = txt;
    console.log(typeof (number1)); console.log(number1);
    // console.log(typeof (number2)); console.log(number2);
    // console.log(typeof (number3)); console.log(number3);


    var num_ap = txt.value += op;
    // console.log(num_ap);
    // document.getElementById('show_mach').innerHTML += num_ap;

    if (txt.value = '') {
        document.getElementById('show_mach').innerHTML += ' '
    } else {
        document.getElementById('show_mach').innerHTML += num_ap;
    }
}



function calc() {
    var txt = document.getElementById('txtResult'); // console.log(txt);

    var result; // console.log(result);
    number2 = parseInt(txt.value);
    // console.log(number2);
    // console.log(txt.value);

    // اگر عدد اینجا برابر بود با نامبر دو اونا رو به دست بیار
    // switch (op) {

    //     case '+': result = number1 + number2; break;
    //     case '-': result = number1 - number2; break;
    //     case '*': result = number1 * number2; break;
    //     case '/': result = number1 / number2; break;
    //     default: result = 'Error'; 
    // }

    if (op = '+') {
        console.log(op);
        result = number1 + number2;
        console.log(result);
        console.log(number1);
        console.log(number2);
    }  else if (op = '=') {
        result = number1 - number2;
    } else if (op = '-') {
        result = number1 - number2;
    } else if (op = '*') {
        result = number1 * number2;
    } else if (op = '/') {
        result = number1 / number2;
    } else {
        result = 'Error';
    }

    txt.value = result;
    console.log(txt.value);


    if (txt.value != result) {
        document.getElementById('show_mach').style.display = 'hidden' ;
    } 
    else if( txt.value = result){
        document.getElementById('txtResult').innerHTML = result ;
    }
    else {
         document.getElementById('show_mach').innerHTML = ' ' ;
    }
}