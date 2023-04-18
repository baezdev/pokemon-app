import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Pokemon } from "@/interfaces";
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

const PokemonPage: NextPage<Props> = ({ pokemon }) => {
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
  const totalPokemons = [...Array(151)].map((val, i) => ({
    params: { id: `${i + 1}` },
  }));

  return {
    paths: totalPokemons,
    /* fallback: false, */
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const pokemon = await getPokemonInfo(id);

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
    //Se volvera a revalidar la pagina cada 24 horas
    revalidate: 86400,
  };
};

export default PokemonPage;
