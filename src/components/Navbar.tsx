import { useState } from "react";
import { Container } from ".";
import { logo } from "../assets";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [text, setText] = useState("");
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-full bg-[#2F353A] h-[76px] text-white">
      <Container height={"h-full"}>
        <div className="flex justify-between items-center h-full w-full">
          <div className="flex items-center">
            <a href="/">
              <img className="w-[142px] h-[46px]" src={logo} alt="logo" />
            </a>
          </div>
          <div className="flex justify-end items-center lg:hidden font-bold ">
            MENU{" "}
            <button
              className={`${
                toggle ? "bg-[#FB3447]" : "bg-[#01BCF3]"
              } rounded-full ms-3 w-10 h-10`}
              onClick={handleClick}
            >
              {toggle ? (
                <CloseIcon sx={{ fontSize: "20px", fontWeight: 800 }} />
              ) : (
                <MenuIcon sx={{ fontSize: "20px", fontWeight: 800 }} />
              )}
            </button>
          </div>
          <div className="flex justify-end items-center hidden lg:flex">
            <ul className="list-none flex">
              <li className="p-[15px]">
                <a
                  className="font-bold text-[#9DA1A4] hover:text-white transition-colors ease-in-out duration-300"
                  href="/"
                >
                  HOME
                </a>
              </li>
              <li className="p-[15px]">
                <a
                  className="font-bold text-[#9DA1A4] hover:text-white transition-colors ease-in-out duration-300"
                  href="/directory"
                >
                  ANIME DIRECTORY
                </a>
              </li>
            </ul>
            <form
              className="flex items-center bg-[#262A2E] h-[40px] rounded-full px-4"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <input
                className="border-none focus:outline-none bg-inherit placeholder:text-[18px]"
                type="text"
                placeholder="Search..."
                name="text"
                value={text}
                onChange={(event) => {
                  setText(event.target.value);
                }}
              />
              <button type="submit">
                <SearchIcon />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
