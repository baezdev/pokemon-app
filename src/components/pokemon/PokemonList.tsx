import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { PokemonsProps } from "@/interfaces/pokemonList";
import { PokemonCard } from "./PokemonCard";

export const PokemonList: FC<PokemonsProps> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="space-between">
      {pokemons.map((pokemon) => (
        <Grid sm={6} xs={6} md={3} xl={2} key={pokemon.name}>
          <PokemonCard {...pokemon} />
        </Grid>
      ))}
    </Grid.Container>
  );
};
