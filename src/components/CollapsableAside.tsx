import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useState } from "react";
import { IAnime } from "../entities/IAnime";
import { LinkTag } from ".";

const CollapsableAside = ({ movies }: { movies: IAnime[] }) => {
  const [expand, setExpand] = useState(false);
  return (
    <div className="bg-white w-full max-w-[722px] md:max-w-[300px] rounded">
      <div className="flex justify-start items-center h-[45px] px-3 border-solid border-b border-[#243C5A]/[.15] relative">
        <PlayArrowIcon style={{ color: "#FF7E00", fontSize: "30px" }} />
        <strong className="ms-4">TRENDING MOVIES</strong>
        <div
          className="h-[45px] w-[45px] absolute md:hidden border-solid border-s border-[#243C5A]/[.20] top-0 right-0 flex justify-center items-center"
          onClick={() => setExpand(!expand)}
        >
          <ExpandLessIcon
            style={{ fontSize: "30px" }}
            className={expand ? "rotate-0" : "rotate-180"}
          />
        </div>
      </div>
      <div
        className={`${
          expand ? "flex" : "hidden"
        } h-[180px] pt-[7px] pb-[15px] w-full overflow-auto list md:flex md:h-fit`}
      >
        <ul className="list-none flex flex-col w-full">
          {movies.map((movie) => {
            return (
              <li key={movie.id} className="h-[40px]  px-[10px] p-4 ">
                <LinkTag title={movie.title} type={movie.type} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CollapsableAside;
