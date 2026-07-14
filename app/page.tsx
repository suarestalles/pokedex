"use client";

import { Filters } from "@/components/Filters";
import { PokemonCard } from "@/components/PokemonCard";
import { SearchBar } from "@/components/SearchBar";
import { usePokemons } from "@/hooks/usePokemons";
import Image from "next/image"

export default function Home() {

  const {
    filteredPokemons,
    types,
    weaknesses,
    search,
    selectedType,
    selectedWeakness,
    loading,
    error,
    setSearch,
    setSelectedType,
    setSelectedWeakness,
  } = usePokemons()

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="min-h-screen bg-red-500 px-4 py-4">
      <section className="mx-auto max-w-6x1">
        <header className="mb-8 text-center">
          <div className="flex flex-row justify-center items-center gap-2">
            <Image
              src="/pokeball.png"
              alt="Pokeball"
              width={64}
              height={64}
              className="transition-transform duration-300 hover:rotate-360"
            />
            <h1 className="text-4xl font-bold text-white uppercase">
              Pokédex
            </h1>
          </div>
          <p className="mt-2 text-gray-200 text-xl">
            Find Pokémons, types and weaknesses!
          </p>
        </header>

        <section className="mb-8 rounded-xl bg-black p-6 shadow shadow-black">
          <div className="flex flex-col gap-4 md:flex-row">
            <SearchBar
              value={search}
              onChange={setSearch}
              />
            <Filters
              types={types}
              selectedType={selectedType}
              weaknesses={weaknesses}
              selectedWeakness={selectedWeakness}
              onTypeChange={setSelectedType}
              onWeaknessChange={setSelectedWeakness}
              />
          </div>
        </section>

        <div className="font-bold text-gray-200">
          {filteredPokemons.length} Pokémons found:
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPokemons.length > 0
            ? (filteredPokemons.map((pokemon) => (
              <PokemonCard
              key={pokemon.id}
              pokemon={pokemon}/>
            ))) : (
              <p className="col-span-full text-center text-gray-200">
                No Pokémon found.
              </p>
            )}
        </section>
      </section>
    </main>
  )
}