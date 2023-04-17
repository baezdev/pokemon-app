import { ReactNode, type FC } from "react";

import Head from "next/head";
import { Navbar } from "@/components/ui";
import { Container } from "@nextui-org/react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Angel Baez" />
        <meta
          name="description"
          content={`Informacion sobre ${title || "pokemon"}`}
        />
        <meta name="keywords" content={`${title || "pokemon"}, pokedex`} />
        <meta
          property="og:title"
          content={`Informacion sobre ${title || "pokemon"}`}
        />
        <meta
          property="og:description"
          content={`Informacion sobre ${title || "pokemon"}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
