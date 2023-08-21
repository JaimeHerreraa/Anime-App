import SearchIcon from "@mui/icons-material/Search";

const SideBar = ({
  toggle,
  text,
  setText,
}: {
  toggle: boolean;
  text: string;
  setText: Function;
}) => {
  return (
    <div
      className={`${
        toggle ? "translate-x-[0px]" : "translate-x-[-272px]"
      } absolute z-10 left-0 top-0 bg-[#373D43] h-screen w-[270px] transition-transform duration-300 flex flex-col py-4 px-4`}
    >
      <form
        className="flex px-4 items-center bg-[#262A2E] h-[40px] rounded-full"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          className="border-none w-[182px] focus:outline-none bg-inherit placeholder:text-[18px]"
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
      <ul className="list-none flex flex-col mt-4">
        <li className="p-[8px]">
          <a
            className="font-bold text-[#9DA1A4] hover:text-white transition-colors ease-in-out duration-300"
            href="/"
          >
            HOME
          </a>
        </li>
        <li className="p-[8px]">
          <a
            className="font-bold text-[#9DA1A4] hover:text-white transition-colors ease-in-out duration-300"
            href="/directory"
          >
            ANIME DIRECTORY
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
