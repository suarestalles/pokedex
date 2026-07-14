"use client";

import { getPokemons } from "@/services/pokemonService";
import { PokemonWithWeakness } from "@/types/pokemon";
import { useEffect, useMemo, useState } from "react";

export function usePokemons() {
    const [pokemons, setPokemons] = useState<PokemonWithWeakness[]>([])
    const [search, setSearch] = useState<string>("")
    const [selectedType, setSelectedType] = useState<string>("")
    const [selectedWeakness, setSelectedWeakness] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)
    
    const types = useMemo(() => {
    return [...new Set(pokemons.flatMap((pokemon) => pokemon.types))]
    }, [pokemons])

    const weaknesses = useMemo(() => {
    return [...new Set(pokemons.flatMap((pokemon) => pokemon.weakness))].sort()
    }, [pokemons])

    const filteredPokemons = useMemo(() => {
        return pokemons.filter((pokemon) => {
            const matchesName = search === "" || pokemon.name.toLowerCase().includes(search.toLowerCase())
            const matchesType = selectedType === "" || pokemon.types.includes(selectedType)
            const matchesWeakness = selectedWeakness === "" || pokemon.weakness.includes(selectedWeakness)
            return matchesName && matchesType && matchesWeakness
        }).sort((a, b) => a.id - b.id)
    }, [pokemons, search, selectedType, selectedWeakness])

    useEffect(() => {
        async function loadPokemons() {
            try {
                const data = await getPokemons()
                setPokemons(data)
            } catch (err) {
                setError("Unable to load Pokémons.\nPlease try again later...")
            } finally {
                setLoading(false)
            }
        }

        loadPokemons()
    }, [])

    return {
        filteredPokemons,
        types,
        weaknesses,
        search,
        selectedType,
        selectedWeakness,
        setSearch,
        setSelectedType,
        setSelectedWeakness,
        loading,
        error,
    }
}