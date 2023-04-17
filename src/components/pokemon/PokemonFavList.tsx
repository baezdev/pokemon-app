import { FC } from "react";
import { Grid } from "@nextui-org/react";
import { PokemonCardFav } from "./PokemonCardFav";

interface Props {
  pokemons: number[];
}

export const PokemonFavList: FC<Props> = ({ pokemons }) => {
  return (
    <Grid.Container gap={2} justify="space-between">
      {pokemons.map((id) => (
        <PokemonCardFav key={id} id={id} />
      ))}
    </Grid.Container>
  );
};
