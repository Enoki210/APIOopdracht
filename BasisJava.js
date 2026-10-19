/*
async function fetchData() {
    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const imgElement = document.getElementById("pokemonSprite");

        console.log(data.stats);
        document.querySelector('.Stats-box').innerHTML =
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

        let pokemonInfo = `Dit is een ${pokemonName} zijn id is ${pokemonID}. Hij heeft een gewicht van ${goedeweight}kg en een lengte van ${goedeHeight} meter. Zijn type is ${pokemonTypes}.`
        document.querySelector('.info-box').innerHTML = pokemonInfo;


        document.querySelector('.Abilities-box').innerHTML = data.abilities.map(item => item.ability.name).join('<br>');


        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch (error) {
        console.error(error);
    }
}
*/
