import Image from "next/image";

const PropsProject = (props) => {
  return (
    <div className="flex justify-center">
      <article className="flex items-center justify-between">
        <div className="flex mt-8 p-5 gap-5 backdrop-blur-sm bg-gradient-to-r from-bkgsecundary/50 to-black/30 rounded-3xl max-lg:flex-col">
          <div className="flex flex-col justify-center space-y-4 font-semibold max-w-[570px]">
            <span className="font-normal text-white/50">
              {props.status}
            </span>
            <span className="flex text-sm gap-3">
                {props.svg}
              </span>
            <div className="flex">
              <h3 className="text-4xl capitalize font-medium max-lg:text-xl text-secundary">
                {props.name}
              </h3>
            </div>
            <p className="font-normal text-justify">{props.description}</p>
          </div>
          <div className="w-fit">
            <Image
              src={props.img}
              alt={`imagem do projeto`}
              width={1920}
              height={1080}
              className="rounded-lg w-[570px] max-h-[310px]"
            />
          </div>
        </div>
      </article>
    </div>
  );
};

export default PropsProject;
