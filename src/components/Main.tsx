import { Card } from ".";
import { IAnime } from "../entities/IAnime";

const Main = ({ animes }: { animes: IAnime[] }) => {
  return (
    <div className="w-full mt-5 md:mt-0 md:ms-5 grow flex flex-col">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-light text-[25px]">Latest Anime Added</h1>
        <span className="relative bg-[#01BCF3] text-white w-[65px] h-[30px] rounded-full flex items-center justify-center">
          Today
          <div className="absolute right-[29px] bottom-[-8px] w-0 h-0 border-solid border-r-[5px] border-l-[5px] border-t-[10px] border-l-transparent border-r-transparent border-[#01bcf3]"></div>
        </span>
      </div>
      <div className="flex flex-wrap w-full mt-2">
        {animes.map((anime) => {
          return <Card anime={anime} key={anime.id} />;
        })}
      </div>
    </div>
  );
};

export default Main;
