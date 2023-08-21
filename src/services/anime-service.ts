import { IAnime } from "../entities/IAnime";
import { convertToIAnimeArray } from "./map-service";

const apiUrl = "https://api.jikan.moe/v4/anime";

const getMovies = async (): Promise<IAnime[] | undefined> => {
  try {
    const request = await fetch(`${apiUrl}?type=movie`);
    let response = await request.json();
    if (response) {
      const mappedData = convertToIAnimeArray(response.data);
      return mappedData;
    }
    return [] as IAnime[];
  } catch (error) {
    console.error("Something Bad Happen: Couldn't retrieve data", error);
  }
};

export { getMovies };
