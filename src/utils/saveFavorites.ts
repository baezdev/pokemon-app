export function saveFavorites(id: number) {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((idPokemon) => id !== idPokemon);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
}

export function existInFavorites(id: number): boolean {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
}

export const getFavoritesPokemons = (): number[] =>
  JSON.parse(localStorage.getItem("favorites") || "[]");
