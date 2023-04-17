import { FC } from "react";
import { PokemonBasic } from "@/interfaces/pokemonList";
import { Card, Row, Text } from "@nextui-org/react";

import { useRouter } from "next/router";

export const PokemonCard: FC<PokemonBasic> = ({ id, image, name }) => {
  const router = useRouter();

  const openPokemon = () => router.push(`/namePokemon/${name}`);

  return (
    <Card isHoverable isPressable variant="bordered" onClick={openPokemon}>
      <Card.Header>
        <Row align="center" gap={1}>
          <Text size="$base" css={{ mr: 5 }}>
            #{id}
          </Text>
          <Text h3 size={"$2xl"} transform="capitalize" css={{ mb: 0 }}>
            {name}
          </Text>
        </Row>
      </Card.Header>
      <Card.Body css={{ paddingRight: "40px", paddingLeft: "40px" }}>
        <Row align="center" css={{ height: "100%" }}>
          <Card.Image src={image} alt={`Imagen de ${name}`} />
        </Row>
      </Card.Body>
    </Card>
  );
};
