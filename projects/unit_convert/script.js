
let celcius;
let fahrenheit;

document.getElementById("btnClick").onclick = function(){
    let isFahrenheit = document.getElementById('fbtn').checked;
    let isCalcius = document.getElementById('cbtn').checked;
    let answer = document.getElementById('ans');
    let val = document.getElementById("vEnter").value;
    val = Number(val);

    if(isFahrenheit)
    {
        fahrenheit = (val*9/5)+32;  
        answer.innerHTML = `Convert to : ${fahrenheit}°C`;
    }
    else if(isCalcius)
    {
        celcius = (val-32)*5/9;  
        answer.innerHTML = `Convert to : ${celcius}°F`;
    }
    else{
        window.alert('Please select degree ⚠️');
    }
    
}

document.getElementById('btnClear').onclick = function(){
   document.getElementById("vEnter").value = '';
   document.getElementById('ans').innerHTML = 'Convert to :';

}