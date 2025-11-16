// JavaScript function to calculate weight on different planets
            const planetGravity = {
                Mercury: 0.38,
                Venus: 0.91,
                Mars: 0.38,
                Jupiter: 2.34,
                Saturn: 1.06,
                Uranus: 0.92,
                Neptune: 1.19
            };

            function calculateWeight() {// Függvény, ami a gombra kattintáskor fut le
                // 1. Felhasználói bemeneti értékek lekérése
                const earthWeightInput = document.getElementById('earthWeight').value; // Földi súly lekérése
                const selectedPlanet = document.getElementById('planetSelect').value; // Ez már a bolygó neve
    
                const earthWeight = parseFloat(earthWeightInput); // Bemeneti érték átalakítása lebegőpontos számmá
    
                if (isNaN(earthWeight) || earthWeight <= 0) {// Érvényes szám ellenőrzése
                    document.getElementById('weightResults').innerText = "Please enter a valid weight greater than 0.";
                    return; // Függvény futásának leállítása
                }
                // 3.számítás a kiválasztott bolygó gravitációs tényezőjével
                const gravityMultiplier = planetGravity[selectedPlanet];// Gravitációs tényező lekérése
                const planetaryWeight = earthWeight * gravityMultiplier; // Súly kiszámítása

                // 4. Eredmény megjelenítése a HTML-ben
                const resultElement = document.getElementById('weightResults');// Eredmény elem lekérése
                resultElement.innerText = `Your weight on ${selectedPlanet} would be ${planetaryWeight.toFixed(2)} kg.`; // Eredmény megjelenítése két tizedesjegyre kerekítve
            } // calculateWeight függvény vége