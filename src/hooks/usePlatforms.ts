import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error } = useData<Platform>("/platforms/lists/parents");
  return { platforms: data, error };
};

export default usePlatforms;
