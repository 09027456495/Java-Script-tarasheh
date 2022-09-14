var numbers = [];
var operates = [];

function btnNumber(e) {
    var txt = document.getElementById('txtResult'); // find the input's ID
    var x = Number(txt.value)

    y = (x == 0) ? x = e.textContent : x += e.textContent;

    txt.value = y;
}

function opertion(e) {
    var op = e.textContent;
    var txt = document.getElementById('txtResult'); //// find the input's ID
    var num_ap = txt.value += op;

    operates.push(op);
    numbers.push(parseFloat(txt.value));

    console.log(operates, numbers);

    if (txt.value = '') {
        document.getElementById('show_mach').innerHTML += ' '
    } else {
        document.getElementById('show_mach').innerHTML += num_ap;
    }
}

function calc() {
    var txt = document.getElementById('txtResult');
    numbers.push(parseFloat(txt.value));

    // numbers.forEach(number => {
    //     number * number2
    // });

    
    var result;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < operates.length; j++) {
            result = numbers + operates[j] + numbers[i]
            console.log(result);
            // result = numbers[i] + operates[j] + numbers[i + 1]
            // result + operates[j] + numbers[i + 1]
        }

    }
    console.log(result);

}
