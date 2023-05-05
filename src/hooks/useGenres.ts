import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const { data, error, isLoading } = {
    data: genres,
    error: null,
    isLoading: false,
  };
  return { genres: data, error, isLoading };
};

export default useGenres;
