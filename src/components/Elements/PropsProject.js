import Image from "next/image";

const PropsProject = (props) => {
  return (
    <div className="flex justify-center">
      <article className="flex items-center justify-between">
        <div className="flex mt-8 p-5 gap-5 backdrop-blur-sm bg-gradient-to-r from-bkgsecundary/50 to-black/30 rounded-3xl max-lg:flex-col">
          <div className="flex flex-col justify-center space-y-4 font-semibold max-w-[570px]">
            <span className="font-normal text-white/50">{props.status}</span>
            <span className="flex text-sm gap-3">{props.svg}</span>
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-4xl capitalize font-medium max-lg:text-xl text-secundary">
                {props.name}{" "}
              </h3>
                <a href={props.url} target="_blank" className="text-secundary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m23.055 14.211l6.942-6.942c2.679-2.678 7.539-2.162 10.217.517s3.195 7.538.517 10.217L30.448 28.286c-2.679 2.678-7.538 2.162-10.217-.517"
                    />
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m24.945 33.788l-6.942 6.943c-2.679 2.678-7.539 2.162-10.217-.517s-3.195-7.538-.517-10.217l10.283-10.283c2.679-2.678 7.538-2.162 10.217.517"
                    />
                  </svg>
                </a>
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
