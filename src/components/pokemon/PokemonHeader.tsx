import { useState } from "react";
import { Button, Row, Text, Tooltip } from "@nextui-org/react";
import { HeartIcon } from "../ui/HeartIcon";

import confetti from "canvas-confetti";

import { existInFavorites, saveFavorites } from "@/utils";

interface Props {
  name: string;
  id: number;
}

export const PokemonHeader = ({ name, id }: Props) => {
  const [isFav, setIsFav] = useState(existInFavorites(id));

  console.log(isFav);

  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const toggleFavorite = () => {
    saveFavorites(id);
    setIsFav(!isFav);

    if (!isFav) {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
        zIndex: 99999,
      });
    }
  };

  return (
    <Row justify="space-between" align="center" css={{ h: "fit-content" }}>
      <Row align="center">
        <Text h1 size={65} transform="capitalize">
          {name}
        </Text>
        <Text span size={30} weight="medium" css={{ ml: 30 }}>
          # {id}
        </Text>
      </Row>
      <Tooltip
        content={isFav ? "Borrar de Favoritos" : "Agregar a Favoritos"}
        color="error"
        placement="left"
      >
        <Button
          flat={!isFav}
          auto
          color="error"
          icon={<HeartIcon fill="currentColor" filled />}
          onPress={toggleFavorite}
        />
      </Tooltip>
    </Row>
  );
};
