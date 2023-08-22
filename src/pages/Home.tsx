import { useEffect, useState } from "react";
import {
  Navbar,
  Banner,
  CollapsableAside,
  Container,
  Main,
  Spinner,
} from "../components";
import { animeService } from "../services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function request() {
      const movies: any = await animeService.getMovies();
      const animes: any = await animeService.getAnimes();
      setMovies(movies);
      setAnimes(animes);
      setLoading(false);
    }
    request();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <Container marginTop={"mt-5"}>
        {loading ? (
          <div className="w-full flex items-center justify-center h-[70vh]">
            <Spinner />
          </div>
        ) : (
          <div className="w-full flex flex-wrap">
            <CollapsableAside movies={movies} />
            <Main animes={animes} />
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;
