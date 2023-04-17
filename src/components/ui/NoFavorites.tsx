import { Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

export const NoFavorites = () => {
  return (
    <Grid.Container direction="column" alignItems="center" gap={3}>
      <Grid>
        <Text size={50} css={{ textAlign: "center" }}>
          There are no pokemons here, add some
        </Text>
      </Grid>
      <Grid>
        <Image
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/143.svg"
          alt="Snorlax"
          width={400}
          height={400}
        />
      </Grid>
    </Grid.Container>
  );
};
