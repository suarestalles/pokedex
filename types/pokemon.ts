export interface Pokemon {
  id: number;
  name: string;
  types: string[];
}

export interface PokemonWithWeakness extends Pokemon {
  weakness: string[];
  imageUrl: string;
}