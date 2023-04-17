import { useEffect, useState } from "react";
import { Layout } from "@/layouts";
import { NoFavorites } from "@/components/ui";
import { getFavoritesPokemons } from "@/utils";
import { PokemonFavList } from "@/components/pokemon/PokemonFavList";

const Favorites = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(getFavoritesPokemons());
  }, []);

  return (
    <Layout title="Favorites">
      {favoritesPokemons?.length > 0 ? (
        <PokemonFavList pokemons={favoritesPokemons} />
      ) : (
        <NoFavorites />
      )}
    </Layout>
  );
};

export default Favorites;
