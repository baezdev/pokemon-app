import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

export async function getPokemonInfo(nameOrId: string) {
  try {
    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${nameOrId}`);
    const { name, stats, sprites, id } = data;

    return { name, stats, sprites, id };
  } catch (error) {
    return null;
  }
}
