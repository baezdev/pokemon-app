export interface PokemonsList {
  count: number;
  next: string;
  previous: null;
  results: Pokemon[];
}

export interface PokemonBasic {
  name: string;
  url: string;
  id: number;
  image: string;
}

export interface PokemonsProps {
  pokemons: Array<Pokemon>;
}
