import React from "react";
import GlobalLink from "../../components/button/GlobalLink";

export default function Creations() {
  return (
    <div>
      <GlobalLink typeLink={"return"} />
      <h1>Créations</h1>
      <p>Découvrez ici ce qui fait le bonheur de nos clients.</p>
      <GlobalLink typeLink={"contact"} />
    </div>
  );
}
