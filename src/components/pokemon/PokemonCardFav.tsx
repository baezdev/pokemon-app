import { Grid, Card, Row } from "@nextui-org/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  id: number;
}

export const PokemonCardFav = ({ id }: Props) => {
  const router = useRouter();

  const openPokemon = () => router.push(`/pokemon/${id}`);

  return (
    <Grid sm={6} xs={6} md={3} xl={2} key={id}>
      <Card isHoverable isPressable variant="bordered" onClick={openPokemon}>
        <Card.Body css={{ paddingRight: "40px", paddingLeft: "40px" }}>
          <Row align="center" css={{ height: "100%" }}>
            <Card.Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
              alt={`Algun pokemon`}
              width="100%"
            />
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  );
};
