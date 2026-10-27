// window.addEventListener('load', function (){
//
//
//
// });


let pokemonData = null;

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();

        if (!pokemonName) return;

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Pokemon not found");
        }

        const data = await response.json();
        pokemonData = data;

        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        document.querySelector('.box-Stats').innerHTML =
            data.stats
                .filter(s => s.stat.name !== "special-attack" && s.stat.name !== "special-defense")
                .map(s => s.stat.name + ": " + s.base_stat)
                .join('<br>');

        let pokemonID = data.id;
        let pokemonTypes = data.types.map(t => t.type.name).join(", ");
        let goedeHeight = data.height / 10;
        let goedeweight = data.weight / 10;

        document.querySelector('.box-Name').innerHTML = `Naam: <br> ${data.name}`;
        document.querySelector('.box-ID').innerHTML = `ID: ${pokemonID}`;
        document.querySelector('.box-Weight').innerHTML = `Weight: ${goedeweight}kg`;
        document.querySelector('.box-Length').innerHTML = `Height: ${goedeHeight}m`;
        document.querySelector('.box-Type').innerHTML = `Type: ${pokemonTypes}`;
        document.querySelector('.box-Shiny').innerHTML = `Shiny: No`;
        document.querySelector('.box-Abilities').innerHTML = data.abilities.map(item => item.ability.name).join(`<br>`);

        document.querySelector('.infobox').textContent = "";

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);

        document.querySelector('.infobox').textContent = error.message;

        document.querySelector('.box-Name').innerHTML = "";
        document.querySelector('.box-ID').innerHTML = "";
        document.querySelector('.box-Weight').innerHTML = "";
        document.querySelector('.box-Length').innerHTML = "";
        document.querySelector('.box-Type').innerHTML = "";
        document.querySelector('.box-Shiny').innerHTML = "";
        document.querySelector('.box-Stats').innerHTML = "";
        document.querySelector('.box-Abilities').innerHTML = "";
    }
}

document.querySelector('#toggle').addEventListener('click', function() {
    const imgElement = document.getElementById("pokemonSprite");
    const shinybox = document.querySelector('.box-Shiny');

    if (!pokemonData) return;

    if (imgElement.src === pokemonData.sprites.front_default) {
        imgElement.src = pokemonData.sprites.front_shiny;
        shinybox.innerHTML = `Shiny: Yes`;
    } else {
        imgElement.src = pokemonData.sprites.front_default;
        shinybox.innerHTML = `Shiny: No`;
    }
});