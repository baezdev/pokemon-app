import { Sprites } from "@/interfaces";
import { Image, Row } from "@nextui-org/react";
import React from "react";

interface Props {
  sprites: Sprites;
  name: string;
}

export const PokemonSprites = ({ sprites, name }: Props) => {
  return (
    <Row justify="space-between">
      <Image src={sprites.front_default} alt={name} width={100} height={100} />
      <Image src={sprites.back_default} alt={name} width={100} height={100} />
      <Image src={sprites.front_shiny} alt={name} width={100} height={100} />
      <Image src={sprites.back_shiny} alt={name} width={100} height={100} />
    </Row>
  );
};
