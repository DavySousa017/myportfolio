import SubTitle from "./Elements/Subtitle";
import ScarletIMG from "../../public/gfscarlet.png";
import ShoppingCart from "../../public/image.png"
import ExempleProject from "../../public/exempleproject.png";
import PropsProject from "./Elements/PropsProject";
import "./styles.css";

const Projects = () => {
  return (
    <div id="projects" className="flex items-center justify-center">
      <section className="bg-black/20 w-full py-36">
        <div className="container mx-auto rounded-3xl">
          <div>
            <SubTitle title="Projetos" bold="recentes" />
            <div className="flex flex-wrap pl-5 gap-4 items-center max-lg:gap-2">
              <a className="py-3 px-8 bg-secundary rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                all
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                front-end
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                back-end
              </a>
              <a className="py-3 px-8 bg-white/30 rounded-full uppercase max-lg:py-2 max-lg:px-4 text-xs">
                full-stack
              </a>
            </div>
          </div>
          <div className="mt-12 space-y-36">
          <PropsProject
              name="Shopping-Cart"
              description="Um carrinho de compras desenvolvido em Next.js e Tailwind que permite aos usuários adicionar produtos a um carrinho virtual e visualizar o que está no carrinho."
              img={ShoppingCart}
              url={'https://shoppingcart-ruby.vercel.app/'}
              svg={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    fill="#e44d26"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#44a8b3"
                      d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </>
              }
            />
            <PropsProject
              status="(desenvolvimento)"
              name="GF-Scarlet"
              description="O GF-Scarlet, é um projeto full-stack em desenvolvimento para um servidor privado de Grand-Fantasia, um MMORPG. Esse projeto conta com um sistema de Login e Cadastros (CRUD) de novos usuários em um banco de dados PostgreSQL."
              img={ScarletIMG}
              svg={
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="2em"
                    fill="#e44d26"
                    viewBox="0 0 384 512"
                  >
                    <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#44a8b3"
                      d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12Z"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    viewBox="0 0 15 15"
                  >
                    <path
                      fill="white"
                      fillRule="evenodd"
                      d="M0 7.5a7.5 7.5 0 1 1 11.697 6.216L4.907 4.21A.5.5 0 0 0 4 4.5V12h1V6.06l5.83 8.162A7.5 7.5 0 0 1 0 7.5ZM10 10V4h1v6h-1Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                xmlns="http://www.w3.org/2000/svg"
                height="2em"
                fill="#8cc249"
                viewBox="0 0 448 512"
              >
                <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z" />
              </svg>
                </>
              }
            />
            <PropsProject
              status="(desenvolvimento)"
              name="exemple project"
              description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus porro laborum quibusdam, quaerat quisquam maiores cumque necessitatibus repellat sit libero fugit sunt dolore eos illum autem consectetur unde velit, laudantium."
              img={ExempleProject}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
