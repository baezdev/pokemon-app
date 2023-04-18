import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { pokeApi } from "@/api";
import { Pokemon, PokemonsList } from "@/interfaces";
import { Layout } from "@/layouts";
import { Collapse, Grid } from "@nextui-org/react";
import {
  PokemonStats,
  PokemonHeader,
  PokemonImages,
} from "@/components/pokemon/";
import { getPokemonInfo } from "@/utils";

interface Props {
  pokemon: Pokemon;
}

const PokemonPageByName: NextPage<Props> = ({ pokemon }) => {
  const { name, stats, sprites, id } = pokemon;

  return (
    <Layout title={name}>
      <Grid.Container gap={5}>
        <PokemonImages sprites={sprites} name={name} />
        <Grid md={8} direction="column">
          <PokemonHeader name={name} id={id} />
          <Collapse.Group splitted css={{ px: 0 }}>
            <PokemonStats stats={stats} />
          </Collapse.Group>
        </Grid>
      </Grid.Container>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await pokeApi.get<PokemonsList>("/pokemon?limit=151");
  const { results } = data;

  const pokemonNames = results.map(({ name }) => ({ params: { name } }));

  return {
    paths: pokemonNames,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string };

  const pokemon = await getPokemonInfo(name);

  if (!pokemon) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonPageByName;
