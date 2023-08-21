import { IAnime } from "../entities/IAnime";

const convertToIAnime = (data: any): IAnime => {
  const producers = data.producers.map((producer: any) => {
    return { id: producer.mal_id, name: producer.name };
  });

  const licensors = data.licensors.map((licensor: any) => {
    return { id: licensor.mal_id, name: licensor.name };
  });

  const genres = data.genres.map((genre: any) => {
    return { name: genre.name };
  });

  return {
    id: data.mal_id,
    images: data.images.jpg,
    title: data.title,
    title_english: data.title_english,
    title_japanese: data.title_japanese,
    type: data.type,
    source: data.source,
    status: data.status,
    airing: data.airing,
    episodes: data.episodes,
    aired: data.aired.string,
    duration: data.duration,
    rating: data.rating,
    score: data.score,
    rank: data.rank,
    popularity: data.popularity,
    members: data.members,
    synopsis: data.synopsis,
    producers: producers,
    licensors: licensors,
    genres: genres,
  } as IAnime;
};

const convertToIAnimeArray = (data: any[]): IAnime[] => {
  const animeList = data.map((anime) => {
    const producers = anime.producers.map((producer: any) => {
      return { id: producer.mal_id, name: producer.name };
    });

    const licensors = anime.licensors.map((licensor: any) => {
      return { id: licensor.mal_id, name: licensor.name };
    });

    const genres = anime.genres.map((genre: any) => {
      return { name: genre.name };
    });

    return {
      id: anime.mal_id,
      images: anime.images.jpg,
      title: anime.title,
      title_english: anime.title_english,
      title_japanese: anime.title_japanese,
      type: anime.type,
      source: anime.source,
      status: anime.status,
      airing: anime.airing,
      episodes: anime.episodes,
      aired: anime.aired.string,
      duration: anime.duration,
      rating: anime.rating,
      score: anime.score,
      rank: anime.rank,
      popularity: anime.popularity,
      members: anime.members,
      synopsis: anime.synopsis,
      producers,
      licensors,
      genres,
    };
  });
  return animeList as IAnime[];
};
export { convertToIAnime, convertToIAnimeArray };
