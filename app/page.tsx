import { PokemonGrid } from "@/components/PokemonGrid";
import { getPokemonList } from "@/lib/pokemonAPI";

export const Home = async () => {
  const pokemonList = await getPokemonList();

  return (
    <>
      <PokemonGrid pokemonList={pokemonList} />
    </>
  );
};

export default Home;
