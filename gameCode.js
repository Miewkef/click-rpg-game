var showMoney = document.getElementsByClassName("Money")[0].style.visibility = "hidden";
var openInv = document.getElementById('openInv');




function incrementButton(){
    let element = document.getElementById('incrementStraw');
    let value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementStraw').innerHTML = value;
    if (value == 10){
        alert('Hooray! Now u can sell your strawberries')
        showMoney = document.getElementsByClassName("Money")[0].style.visibility = "visible";
    }
}

function showInv(){
    let element = document.getElementById('incrementStraw');
    let valueStraw = element.innerHTML;
    let element1 = document.getElementById('incrementRasp');
    let valueRasp =element1.innerHTML;
    let element2 = document.getElementById('incrementGrape');
    let valueGrape =element2.innerHTML;
    let element3 = document.getElementById('incrementBlack');
    let valueBlack =element3.innerHTML; 
    alert(`you have:\n${valueStraw}sb\n${valueRasp}rb\n${valueGrape}grp\n${valueBlack}bb`)
}