const PropsSkill = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 w-[320px] h-[320px] bg-black/30 rounded-xl max-md:px-6 hover:scale-105 ease-out duration-300 hover:bg-black/10 hover:shadow-md hover:shadow-black max-lg:w-[250px] max-lg:h-[250px] max-sm:w-[180px] max-sm:h-[180px]">
      <div className="w-full flex justify-center">
        <h3 className="font-medium text-2xl max-lg:text-lg">{props.tec}</h3>
      </div>
      <span className="text-3xl max-sm:text-xl">{props.svg}</span>
    </div>
  );
};

export default PropsSkill;
