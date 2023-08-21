import { useEffect, useState } from "react";
import { Navbar, Banner, CollapsableAside, Container } from "../components";
import { animeService } from "../services";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function request() {
      const data: any = await animeService.getMovies();
      setMovies(data);
    }
    request();
  }, []);
  return (
    <>
      <Navbar />
      <Banner />
      <Container marginTop={"mt-5"}>
        <div className="w-full flex flex-wrap">
          <CollapsableAside movies={movies} />
        </div>
      </Container>
    </>
  );
};

export default Home;
