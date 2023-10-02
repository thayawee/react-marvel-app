import useHeroes from "../hooks/useHeroes";
import HeroesItem from "./HeroesItem";

const HeroesList = () => {
  const { loading, heroes } = useHeroes();

  return (
    <div className="bg-gray-800 min-h-screen p-3">
      <h3 className="font-semibold text-white font-mono text-3xl text-center py-4">
        Heroes
      </h3>
      <div className="flex gap-4 lg:gap-6 flex-wrap justify-center">
        {loading ? (
          <p>Loading...</p>
        ) : (
          heroes.map((data, index) => <HeroesItem key={index} heroes={data} />)
        )}
      </div>
    </div>
  );
};

export default HeroesList;
