import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "DavySousa",
  description: "My WebSite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Olá! Eu sou o Davy, e estou aqui para compartilhar meu portfólio e experiência na criação de interfaces web impressionantes e funcionais. Explore meu trabalho e descubra como minhas habilidades podem elevar a experiência do usuário online."
        />
        <meta
          name="keywords"
          content="dev-front-end,desenvolvedor-front-end,front-end-developer, front-end,  programador, portfolio, curriculo"
        />
        <meta name="author" content="Davy de Sousa" />
        <meta name="robots" content="index, follow" />

        <meta property="og:title" content="DavySousa" />
        <meta
          property="og:description"
          content="Olá! Eu sou o Davy, e estou aqui para compartilhar meu portfólio e experiência na criação de interfaces web."
        />
        <meta property="og:image" content="/public/rs.png" />
        <meta property="og:url" content="/src/app/page.js" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@davyss04" />
        <meta name="twitter:title" content="DavySousa" />
        <meta
          name="twitter:description"
          content="Olá! Eu sou o Davy, e estou aqui para compartilhar meu portfólio e experiência na criação de interfaces web."
        />
        <meta name="twitter:image" content="/public/rs.png" />
        <link rel="icon" href="/src/app/favicon.ico" sizes="any" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
