// window.addEventListener('load', function (){
//
//
//
// });


let pokemonData = '';

async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            new Error("Could not fetch resource");
        }

        const data = await response.json();
        pokemonData = data;
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        console.log(data.stats);
        document.querySelector('.box-Stats').innerHTML =
            data.stats
                .filter(s => s.stat.name !== "special-attack" && s.stat.name !== "special-defense")
                .map(s => s.stat.name + ": " + s.base_stat)
                .join('<br>'
                );

        console.log(data.id);
        let pokemonID = data.id;
        console.log(data.types);
        let pokemonTypes = data.types.map(t => t.type.name).join(", ")
        console.log(data.height);
        let pokemonHeight = data.height
        let goedeHeight = pokemonHeight / 10
        console.log(data.weight);
        let pokemonWeight = data.weight;
        let goedeweight = pokemonWeight / 10
        console.log(data.abilities);
        let pokemonAbilities = data.abilities;

        document.querySelector('.box-Name').innerHTML = `Naam: <br> ${data.name}`
        document.querySelector('.box-ID').innerHTML = `ID:${pokemonID}`
        document.querySelector('.box-Weight').innerHTML = `Weight:${goedeweight}kg`
        document.querySelector('.box-Length').innerHTML = `Height:${goedeHeight}m`
        document.querySelector('.box-Type').innerHTML = `Type:${pokemonTypes}`
        document.querySelector('.box-Shiny').innerHTML = `Shiny: No`;
        document.querySelector('.box-Abilities').innerHTML = data.abilities.map(item => item.ability.name).join(`<br>`);

        /*let pokemonInfo = `Naam:${data.name} <br> ID:${pokemonID} <br> Gewicht:${goedeweight}kg <br> Lengte:${goedeHeight} meter <br>  Type:${pokemonTypes}`
        document.querySelector('.infobox').innerHTML = pokemonInfo;*/


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}


document.querySelector('#toggle').addEventListener('click', function() {
    const imgElement = document.getElementById("pokemonSprite");
        const shinybox = document.querySelector('.box-Shiny');

    if (imgElement.src === pokemonData.sprites.front_default) {
        let shiny = pokemonData.sprites.front_shiny;
        imgElement.src = pokemonData.sprites.front_shiny;
            shinybox.innerHTML = `Shiny: Yes`
    } else {
        imgElement.src = pokemonData.sprites.front_default;
            shinybox.innerHTML = `Shiny: No`
    }

    imgElement.style.display = "block";
});