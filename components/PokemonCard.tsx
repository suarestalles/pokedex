import { PokemonWithWeakness } from "@/types/pokemon"
import Image from "next/image";

type PokemonCardProps = {
    pokemon: PokemonWithWeakness
}

export function PokemonCard({
    pokemon
}: PokemonCardProps) {
    return (
        <article className="rounded-xl bg-white p-6 shadow transition hover:-translate-y-1 hover:shadow-lg duration-300">
            <div
                key={pokemon.id}
                className="flex justify-center"
            >
                <Image
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    width={96}
                    height={96}
                    loading="eager"
                />
            </div>
            <h2
                className="mt-4 text-center text-2x1 font-bold capitalize text-black"
            >{pokemon.name}</h2>
            <div className="mt-4">
                <h3 className="font-semibold text-gray-700">Types</h3>
                {pokemon.types.map((type) => (
                    <span
                        key={type}
                        className="rounded-full bg-green-300 px-3 py-1 mr-1 text-sm text-green-700 capitalize"
                    >{type}
                    </span>
                ))}
            </div>

            <div className="mt-4">
                <h3 className="font-semibold text-gray-700">Weaknesses</h3>
                <div className="flex flex-row overflow-x-auto">
                    {pokemon.weakness.map((weaknes) => (
                        <span
                            key={weaknes}
                            className="rounded-full bg-red-300 px-3 py-1 mr-1 text-sm text-red-700 capitalize"
                        >{weaknes}
                        </span>
                    ))}
                </div>
            </div>
            {/* <ul>Weakness:
                {pokemon.weakness.map((weaknes) => {
                return (<li key={weaknes}>{weaknes}</li>)
                })}
            </ul>
            <h1>-----------------------</h1> */}
        </article>
    )
}