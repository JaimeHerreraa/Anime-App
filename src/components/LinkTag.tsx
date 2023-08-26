import { useState } from "react";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const LinkTag = ({ type, title }: { type: string; title: string }) => {
  const [tagColor, setTagColor] = useState("#01BCF3");
  return (
    <a
      className="w-full flex justify-between items-center cursor-pointer hover:text-[#80DDF9]"
      href="/"
      onMouseOver={() => setTagColor("#80DDF9")}
      onMouseLeave={() => setTagColor("#01BCF3")}
    >
      <div className="flex items-center text-[14px] text-[#3A4147] w-[80%] mr-3 overflow-hidden">
        <PlayCircleFilledIcon
          sx={{
            width: "18px",
            height: "18px",
            color: "#E0E1E2",
            marginRight: "6px",
          }}
        />
        <span className="float-left truncate">{title}</span>
      </div>

      <div
        style={{ backgroundColor: `${tagColor}` }}
        className="w-[20%] max-w-[60px] h-[20px] rounded-full flex justify-center items-center text-white font-bold uppercase text-[11px] shrink-0"
      >
        {type}
      </div>
    </a>
  );
};

export default LinkTag;
