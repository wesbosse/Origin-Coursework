  $(document).ready(function(){

    $("#calculate").click(function(){
      var currency = [
        {name:"Twentys", val: 2000, change: 0},
        {name:"Tens", val: 1000, change: 0},
        {name:"Fives", val: 500, change: 0},
        {name:"Dollars", val: 100, change: 0},
        {name:"Quarters", val: 25, change: 0},
        {name:"Dimes", val: 10, change: 0},
        {name:"Nickels", val: 5, change: 0},
        {name:"Pennies", val: 1, change: 0}
      ];

      var due = $("#total").val();
      var given = $("#paid").val();
      var changeOwed = (given - due) * 100;
      var outputHTML = "<ul>Change Due: ";

      for (i = 0; i < currency.length; i++)
      {
        currency[i].change = Math.floor(changeOwed / currency[i].val);
        changeOwed = changeOwed % currency[i].val;
        if(currency[i].change != "0") {  
          outputHTML += "<li>" + currency[i].change + " " + currency[i].name + "</li>";
        }
      }

      $("#results-actual").empty().append(outputHTML);
      return false;
    }); 
    return false;

});