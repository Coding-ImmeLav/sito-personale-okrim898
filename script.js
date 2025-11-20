function Giorni() {
    let valore = document.getElementById("numero").value;

    if (valore < 0) valore = 0;
    if (valore > 100) valore = 100;

    document.getElementById("barra").style.width = valore + "%";
}
