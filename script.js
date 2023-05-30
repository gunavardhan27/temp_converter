function calculate(){
    const i = document.getElementById('vd').value;

    const t = document.getElementById
    ('td');
    const v = td.options[t.
        selectedIndex].value;


    function celToFah(cel){
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }


    function fahToCel(fah){
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (v == 'cel') {
        document.getElementById("result").innerHTML = celToFah(i) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(i) + "&#176; Celsius";
    }
}
