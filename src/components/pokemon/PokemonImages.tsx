import { Card, Grid } from "@nextui-org/react";
import { PokemonSprites } from "./PokemonSprites";
import { Sprites } from "@/interfaces";

interface Props {
  sprites: Sprites;
  name: string;
}

export const PokemonImages = ({ sprites, name }: Props) => {
  return (
    <Grid md={4} direction="column">
      <Card css={{ p: 25 }}>
        <Card.Body>
          <Card.Image src={sprites.other?.dream_world.front_default!} />
        </Card.Body>
      </Card>
      <PokemonSprites sprites={sprites} name={name} />
    </Grid>
  );
};
