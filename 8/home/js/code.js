
// function for inputs write
// when people onkeydown in input , sey a error

// input text (1)
function filter_inputs1(myEventInput1) {
    console.log(myEventInput1);

    var fn_onkeydown_1 = myEventInput1.keyCode;
    if (fn_onkeydown_1 > 95 && fn_onkeydown_1 < 106) {

        $('.error').fadeIn(500).html(` لطفا از اعداد استفاده نکنید `);
        // document.getElementById('error').innerHTML=`لطفا از اعداد استفاده نکنید `
        $('#texti').addClass('jq-add-input1');
        myEventInput1.preventDefault();

        setTimeout(() => {
            $('.error').fadeOut(500);
            // document.getElementById('error').innerHTML=''
            $('#texti').removeClass('jq-add-input1');
        }, 3000);

    } else if (fn_onkeydown_1 > 47 && fn_onkeydown_1 < 58) {

        $('.error').fadeIn(500).html(` لطفا از اعداد استفاده نکنید `);
        $('#texti').addClass('jq-add-input1');
        myEventInput1.preventDefault();

        setTimeout(() => {
            $('.error').fadeOut(500);
            $('#texti').removeClass('jq-add-input1');
        }, 3000);

    } else {
        $('.error').fadeOut(500);
        $('#texti').removeClass('jq-add-input1');
    }
}

// input email (2)
function filter_inputs2(myEventInput2) {
    console.log(myEventInput2);
    var fn_onkeydown_2 = myEventInput2.keyCode;

    if (fn_onkeydown_2 > 1 && fn_onkeydown_2 < 200) {

        $('.error-blue').fadeIn(500).html(` @gmail.com یادت نره! `);

        setTimeout(() => {
            $('.error-blue').fadeOut(500);
        }, 3000);

    } else {
        $('.error-blue').fadeOut(500);

    }
}

// input tel (3)
function filter_inputs3(myEventInput3) {
    console.log(myEventInput3);

    var fn_onkeydown_3 = myEventInput3.keyCode;
    if (fn_onkeydown_3 > 95 && fn_onkeydown_3 < 106 || fn_onkeydown_3 == 8 || fn_onkeydown_3 == 9) {
        $('.error').fadeOut(500);
        $('#teli').removeClass('jq-add-input1');

    } else if (fn_onkeydown_3 > 47 && fn_onkeydown_3 < 58 || fn_onkeydown_3 == 8 || fn_onkeydown_3 == 9) {
        $('.error').fadeOut(500);
        $('#teli').removeClass('jq-add-input1');
    } else {

        myEventInput3.preventDefault();
        $('.error').fadeIn(500).html(' لطفا فقط از اعداد استفاده کنید  ');
        $('#teli').addClass('jq-add-input1');

        setTimeout(() => {
            $('.error').fadeOut(500);
            $('#teli').removeClass('jq-add-input1');
        }, 3000);
    }
}

// input password (4)
function filter_inputs4(myEventInput4) {
    console.log(myEventInput4);

    var fn_onkeydown_4 = myEventInput4.keyCode;
    if (fn_onkeydown_4 > 95 && fn_onkeydown_4 < 106 || fn_onkeydown_4 == 8 || fn_onkeydown_4 == 9) {
        $('.error').fadeOut(500);
        $('#password').removeClass('jq-add-input1');

    } else if (fn_onkeydown_4 > 47 && fn_onkeydown_4 < 58 || fn_onkeydown_4 == 8 || fn_onkeydown_4 == 9) {
        $('.error').fadeOut(500);
        $('#password').removeClass('jq-add-input1');
    } else {

        myEventInput4.preventDefault();
        $('.error').fadeIn(500).html(' لطفا فقط از اعداد استفاده کنید  ');
        $('#password').addClass('jq-add-input1');

        setTimeout(() => {
            $('.error').fadeOut(500);
            $('#password').removeClass('jq-add-input1');
        }, 3000);
    }
}













// function for information

function see_information() {
    alert(`
    نام : amir 
    ایمیل : amir@gmail.com
    شماره تماس : 12345
    رمز عبور : 123456
    `)
}

function send_show() {

    // give a things that people write for inputs
    // sName = $('#texti').val();
    // sEmail = $('#emaili').val();
    // sTel = $('#teli').val();
    // sPassword = $('#password').val();

    sName = document.getElementById("texti").value;
    sEmail = document.getElementById("emaili").value;
    sTel = document.getElementById("teli").value;
    sPassword = document.getElementById("password").value;

    var test = [sName, sEmail, sTel, sPassword];

    // now we say what is my information
    my_sName = "amir";
    my_sEmail = "amir@gmail.com";
    my_sTel = "12345";
    my_sPassword = "123456";


    // let's start for our condishens

    array.forEach(element => {
        
    });

    // when there is no value in inputs
    if (sName == " " && sEmail == " " && sTel == " " && sPassword == " ") {
        alert("لطفا فرم خود را تکمیل کنید ");
        $('.error').fadeIn(500).html(` لطفا فرم خود را تکمیل کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName == my_sName && sEmail != my_sEmail && sTel != my_sTel && sPassword != my_sPassword) {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از نام هم درست پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != my_sName && sEmail == my_sEmail && sTel != my_sTel && sPassword != my_sPassword) {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از ایمیل هم درست پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != my_sName && sEmail != my_sEmail && sTel == my_sTel && sPassword != my_sPassword) {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از تلفن همراه هم درست پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != my_sName && sEmail != my_sEmail && sTel != my_sTel && sPassword == my_sPassword) {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از رمزعبور هم درست پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }

    
    else if (sName == my_sName && sEmail != "" && sTel != "" && sPassword != "") {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از نام هم پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != "" && sEmail == my_sEmail && sTel != "" && sPassword != "") {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از ایمیل هم پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != "" && sEmail != "" && sTel == my_sTel && sPassword != "") {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از تلفن همراه هم پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
    else if (sName != "" && sEmail != "" && sTel != "" && sPassword == my_sPassword) {
        $('.error').fadeIn(500).html(` لطفا کاراکتر های غیر از رمزعبور هم پر کنید `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }


    else if (sName == my_sName && sEmail == my_sEmail && sTel == my_sTel && sPassword == my_sPassword) {
        $('.error').fadeIn(500).html(` به درستی فرم پر شده است`);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }

    else {
        $('.error').fadeIn(500).html(`  فرم به درستی پر نشده است  `);
        setTimeout(() => {
            $('.error').fadeOut(500);
        }, 3000);
    }
}