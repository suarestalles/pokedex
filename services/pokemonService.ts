import { getWeaknesses } from "@/lib/weakness";
import { Pokemon, PokemonWithWeakness } from "@/types/pokemon";

export async function getPokemons(): Promise<PokemonWithWeakness[]> {
    const response = await fetch("/api/pokemons", { cache: "no-cache" })

    if (!response.ok) {
        throw new Error("Error searching for Pokémons.")
    }

    const pokemons: Pokemon[] = await response.json()
    
    return pokemons.map((pokemon) => ({
        ...pokemon,
        weakness: getWeaknesses(pokemon.types),
        imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
    }))
}