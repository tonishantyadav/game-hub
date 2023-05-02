import useData from "./useData";
import { GameQuery } from "../App";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const { data, error, isLoading } = useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre,
        platforms: gameQuery?.platform,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery]
  );
  return { games: data, error, isLoading };
};

export default useGames;
