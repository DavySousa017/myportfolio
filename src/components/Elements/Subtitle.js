const SubTitle = (props) => {
  return (
    <h2 className="p-5 text-6xl max-md:text-4xl max-[440px]:text-2xl">
      {props.title}{" "}
      <span className="font-bold text-secundary animate-pulse">
        {props.bold}
      </span>
    </h2>
  );
};

export default SubTitle;
