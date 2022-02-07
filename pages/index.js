import GlobalLink from "@components/button/GlobalLink";
import Meta from "@components/core/meta/Meta";

export default function Home() {
  return (
    <div>
      <Meta typeMeta="home" />
      <h1>Atelier Heyraud</h1>
      <h2>Menuiserie Agencement Peinture</h2>
      <GlobalLink typeLink="creations" />
      <GlobalLink typeLink="contact" />
    </div>
  );
}
