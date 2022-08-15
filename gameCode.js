var showMoney = document.getElementsByClassName("Money")[0].style.visibility = "hidden";

let sbCount = 0;
let rbCount = 0;
let grpCount = 0;
let bbCount = 0;
document.getElementById('berry').onclick = function(){
    sbCount +=1;
    document.getElementById('incrementStraw').innerHTML=sbCount;
    if (sbCount!=0){
        showMoney = document.getElementsByClassName("Money")[0].style.visibility = "visible";
    }
}

document.getElementById('inventory').onclick = function(){
    (sbCount!=0) ? alert(`you have\n${sbCount} sb\n${rbCount} rb\n${grpCount} grp\n${bbCount} bb`) : alert('you have nothing to lose');
}
