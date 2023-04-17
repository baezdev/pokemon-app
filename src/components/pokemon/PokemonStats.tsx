import { Stat } from "@/interfaces";
import { Col, Collapse, Progress, Row, Text } from "@nextui-org/react";
import React from "react";

interface Props {
  stats: Stat[];
}

export const PokemonStats = ({ stats }: Props) => {
  return (
    <Collapse
      title={
        <Text h3 size={28}>
          Stats
        </Text>
      }
    >
      {stats.map(({ stat, base_stat }) => (
        <Row key={stat.name} css={{ mb: 25 }} align="center">
          <Col css={{ w: "180px" }}>
            <Text transform="capitalize" size={18}>
              {stat.name}
            </Text>
          </Col>
          <Progress color="secondary" striped max={100} value={base_stat} />
          <Col css={{ w: "fit-content", ml: "20px" }}>
            <Text transform="capitalize" size={16} weight={"bold"}>
              {base_stat}
            </Text>
          </Col>
        </Row>
      ))}
    </Collapse>
  );
};
