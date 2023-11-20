
/* Otteniamo il riferimento all'elemento HTML con l'id "weightSlider" e lo salviamo nella variabile weightSlider */
const weightSlider = document.getElementById("weightSlider");

/* Otteniamo il riferimento all'elemento HTML con l'id "weightDisplay" e lo salviamo nella variabile weightDisplay */
const weightDisplay = document.getElementById("weightDisplay");

/* Otteniamo il riferimento all'elemento HTML con l'id "statusDisplay" e lo salviamo nella variabile statusDisplay */
const statusDisplay = document.getElementById("statusDisplay");

/* Aggiungiamo un ascoltatore per l'evento "input" al weightSlider */
weightSlider.addEventListener("input", () => {
    // Otteniamo il valore corrente del weightSlider
    const weight = weightSlider.value;
    
    // Aggiorniamo il contenuto dell'elemento "weightDisplay" con il peso corrente e l'unità di misura
    weightDisplay.textContent = weight + " Kg"

    // Verifichiamo il peso e aggiorniamo lo "statusDisplay" di conseguenza
    if(weight<50) {
        statusDisplay.textContent = "Sottopeso";
    }else if (weight >= 50 && weight<=85) {
        statusDisplay.textContent = "Peso normale";
    } else {
        statusDisplay.textContent = "Sovrappeso";
    }
});