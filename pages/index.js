import GlobalLink from "../components/button/GlobalLink";

export default function Home() {
  return (
    <div>
      <h1>Atelier Heyraud</h1>
      <h2>Menuiserie Agencement Peinture</h2>
      <GlobalLink typeLink={"creations"} />
      <GlobalLink typeLink={"contact"} />
    </div>
  );
}
