const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}]`;

function convertPokemonToLi(pokemon) {
	return `<li class="pokemon">
					<span class="number">#001</span>
					<span class="name">${pokemon.name}</span>
					<div class="detail">
						<ol class="types">
							<li class="type">Grass</li>
							<li class="type">Poison</li>
						</ol>
						<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
							alt="${pokemon.name}">
					</div>
				</li>
    `
}

const pokemonList = document.getElementById('pokemonList')


fetch(url)
	.then((response) => response.json())
	.then((jsonBody) => jsonBody.results)
	.then((pokemons) => {

		for (let i = 0; i < pokemons.length; i++) {
			const pokemon = pokemons[i];
			pokemonList.innerHTML += convertPokemonToLi(pokemon)
		}
		console.log('...Carregamento finalizado')
	}
	)
	.catch((error) => console.log(error))

console.log("Esperando...")

//y-front-end-do-zero/course/entendendo-o-funcionamento-do-protocolo-http/learning/bb9ca767-7c06-46e9-a5f8-903a760d62a3?autoplay=1