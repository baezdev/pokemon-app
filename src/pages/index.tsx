import { GetStaticProps } from "next";

import { Layout } from "@/layouts";
import { pokeApi } from "@/api";
import { PokemonsList, PokemonsProps } from "@/interfaces/";
import { PokemonList } from "@/components/pokemon";
import { Pokemon } from "@/interfaces";

const Home = ({ pokemons }: PokemonsProps) => {
  return (
    <Layout>
      <PokemonList pokemons={pokemons} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await pokeApi.get<PokemonsList>("/pokemon?limit=151");

  const pokemons: Array<Pokemon> = data.results.map((pokemon, i) => ({
    ...pokemon,
    id: i + 1,
    image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + 1
    }.svg`,
  }));

  return {
    props: { pokemons },
  };
};

export default Home;
