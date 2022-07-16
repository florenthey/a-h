import GlobalLink from "@components/button/GlobalLink";
import Meta from "@components/core/meta/Meta";
import Image from "next/image";
import { Wrapper, Links } from "./index.style";

// type: "exteriorCarpentry",
// path: "/images/menuiserie-exterieure/menuiserie-exterieure-porte-01.jpg",
// description: "Porte",
// width: "300",
// height: "215",

export default function Home() {
  return (
    <Wrapper>
      <Meta typeMeta="home" />
      <Image src="/images/logo.png" width={876} height={678} />
      <Links>
        <GlobalLink typeLink="creation" />
        <GlobalLink typeLink="contact" />
      </Links>
      <h1>Atelier Heyraud</h1>
      <h2>Menuiserie Agencement Peinture</h2>
    </Wrapper>
  );
}
