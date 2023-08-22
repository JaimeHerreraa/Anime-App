import { IAnime } from "../entities/IAnime";

const Card = ({ anime }: { anime: IAnime }) => {
  return (
    <div className="w-full h-fit grid grid-cols-12 gap-0 mb-4 mt-4">
      <div className="col-start-1 col-end-13 flex flex-col items-center">
        <img
          className="w-full h-[420px] rounded border-solid border-white border-[4px] shadow relative"
          alt={anime.title}
          src={anime.images.large_image_url}
        />
        <span className="font-bold text-[18px] mt-4">{anime.title}</span>
      </div>
    </div>
  );
};

export default Card;
