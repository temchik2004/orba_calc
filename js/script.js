$(document).ready(function () {
    var firstNumber, secondNumber, result;
    var temp='';
    var display = $('.display');
    $('.number').on('click',function () {
        if((temp == '') && (firstNumber == undefined)){
            display.text('');
        }
        display.append($(this).data('number'));
        temp += $(this).data('number');
    });
    $('.equal').on('click',function () {
        if(firstNumber == null){
            firstNumber = parseInt(temp);
        }else{
            secondNumber = isNaN(parseInt(temp)) ? firstNumber : parseInt(temp);
            equal()
        }
        firstNumber = undefined;
        secondNumber = undefined;
        temp = '';
    });
    $('.plus').on('click',function () {
        if(firstNumber == null){
            firstNumber = isNaN(parseInt(temp)) ? 0 : parseInt(temp);
            if (firstNumber==0){display.append('0');}
        }else{
            secondNumber = (isNaN(parseInt(temp))) ? firstNumber : parseInt(temp);
        }
        if ( !isNaN(firstNumber) && !isNaN(secondNumber)){ equal(); }
        display.append('+');
        temp = '';
    });
    function equal(){
        result = firstNumber + secondNumber;
        firstNumber = result;
        temp = result;
        display.text(result);
        result = undefined;
    }
});