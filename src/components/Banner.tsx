import { Container } from ".";

const Banner = () => {
  return (
    <Container height={"h-[83px]"} marginTop={"mt-5"}>
      <div className="h-full w-full py-[10px] px-5 flex justify-center items-center bg-[#2F353A] rounded text-center relative">
        <p className="font-thin text-white text-[25px]">
          <span className="font-bold">AnimeFLV&nbsp;</span>your source of free
          online anime in HD
        </p>
        <div className="absolute bottom-0 w-full h-[2px] bg-[#01BCF3]"></div>
      </div>
    </Container>
  );
};

export default Banner;
