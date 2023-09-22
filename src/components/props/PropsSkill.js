const PropsSkill = (props) => {
    return (
      <div className="flex items-center w-[650px] mb-12 py-9 px-12 bg-black/20 rounded-xl max-md:px-6">
        <span className="pr-9">{props.svg}</span>
        <div className="w-full">
          <h3 className="font-medium text-2xl max-lg:text-lg">{props.tec}</h3>
          <p className="py-3 font-normal text-justify">{props.text}</p>
        </div>
      </div>
    );
  };
  
  export default PropsSkill;
  