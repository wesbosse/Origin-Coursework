$(document).ready(function(){

    $("#calculate").click(function(){

        var balance = $("#balance").val();

        var rate = $("#interest-rate").val();

        var term = $("#term").val();

        var period = $(".option:selected").val();

        var numberOfPayments = term * period;
        var monthlyRate = (rate/100) / period;
        var rateMultiple = Math.pow((1 + monthlyRate), numberOfPayments);
        var finalMultiple = (monthlyRate * rateMultiple)/(rateMultiple - 1);
        var finalValue = (balance * finalMultiple).toFixed(2);
        
        console.log(term);
        $("#results-actual").empty().append("The monthly payment for your mortgage is $" + finalValue);
        return false;
    }); 
    return false;

});