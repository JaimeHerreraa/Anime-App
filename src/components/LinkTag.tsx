import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const LinkTag = ({ type, title }: { type: string; title: string }) => {
  const [tagColor, setTagColor] = useState("#01BCF3");
  return (
    <a
      className="flex justify-between items-center cursor-pointer text-[#3A4147] hover:text-[#80DDF9] transition-colors duration-300"
      href="/"
      onMouseOver={() => setTagColor("#80DDF9")}
      onMouseLeave={() => setTagColor("#01BCF3")}
    >
      <div className="flex items-center">
        <PlayCircleFilledIcon
          style={{
            color: "inherit",
            fontSize: "20px",
            marginRight: "8px",
          }}
        />
        <span className="truncate w-[240px] md:w-[190px]">{title}</span>
      </div>
      <div
        style={{ backgroundColor: `${tagColor}` }}
        className="transition-colors duration-300 w-[65px] md:w-[50px] h-[20px] text-white font-bold flex justify-center items-center rounded-full text-[12px] md:text-[10px]"
      >
        {type}
      </div>
    </a>
  );
};

export default LinkTag;
