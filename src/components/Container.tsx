const Container = ({
  children,
  height,
  marginTop,
}: {
  children: any;
  height?: string;
  marginTop?: string;
}) => {
  return (
    <div
      className={`${height} ${marginTop} w-full px-4 md:w-[765px] md:p-0 lg:w-[990px] xl:w-[1170px] h-full mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
