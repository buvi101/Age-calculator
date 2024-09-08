function sum (){
    let num1 = document.getElementById("date-1").value;
    let num2 = document.getElementById("date-2").value;
    if (num1 < 32 || num2  < 32) {
        let total1 = parseInt(num1)-parseInt(num2); 
        document.getElementById("Result1").innerHTML=`${Math.abs(total1)} days old`;       
    }
    else{
        alert("Please enter a valid date");
    }
    let num3 = document.getElementById("month-1").value;
    let num4 = document.getElementById("month-2").value;
    if (num3 == 2 & num1 >29) {
        alert("Please enter valid date for month-2");
    }
    if (num4 == 2 & num2 >29) {
        alert("Please enter valid date for month-2");
    }
    if (num3 < 13 || num4 < 13) {
        let total2 = parseInt(num3)-parseInt(num4);
        document.getElementById("Result2").innerHTML=`${Math.abs(total2)} months`;
    }
    else{
        alert("Please enter a valid month");
    }
    let num5 = document.getElementById("year-1").value;
    let num6 = document.getElementById("year-2").value;
    let total3 = Math.abs(parseInt(num5)-parseInt(num6));
    document.getElementById("Result3").innerHTML=`You are ${Math.abs(total3)} years`;
}