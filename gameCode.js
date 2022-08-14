function incrementButton(){
    let element = document.getElementById('incrementText');
    let value = element.innerHTML;

    ++value;

    console.log(value);
    document.getElementById('incrementText').innerHTML = value;
    if (value == 2){
        alert('Hooray! Now u can sell your strawberries')
        
    }
}