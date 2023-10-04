import { useEffect, useState } from "react";
import { IHeroes } from "../interfaces";
import data from "../data/heroes.json";

const useHeroes = () => {
  const [heroes, setHeroes] = useState<IHeroes[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getHeroesByName = (nameHeroes: string) => {
    return heroes.find((data) => data.hero === nameHeroes) ?? ({} as IHeroes);
  };

  useEffect(() => {
    setTimeout(() => {
      setHeroes(data);
      setLoading(false);
    }, 300);
  }, []);

  return { heroes, loading, getHeroesByName };
};

export default useHeroes;
