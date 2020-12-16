import React from "react";
import GlobalLink from "../../components/button/GlobalLink";
import Meta from "../../components/core/meta/Meta";

export default function Creations() {
  return (
    <div>
      <Meta typeMeta={"creations"} />
      <GlobalLink typeLink={"return"} />
      <h1>Créations</h1>
      <p>Découvrez ici ce qui fait le bonheur de nos clients.</p>
      <GlobalLink typeLink={"contact"} />
    </div>
  );
}
