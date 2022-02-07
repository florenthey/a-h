import React from "react";
import Meta from "@components/core/meta/Meta";
import GlobalLink from "@components/button/GlobalLink";

const studioData = {
  meta: "studio",
  title: "Atelier",
  introSylvain: (
    <p>
      <span>Sylvain Heyraud</span>, artisan passionné, diplômé en menuiserie,
      fabrication de mobilier et d’agencement.
    </p>
  ),
  introEdwige: (
    <p>
      <span>Edwige Deygout</span>, diplômée également en menuiserie et peintre
      décorateur.
    </p>
  ),
  experienceText: (
    <p>
      Nos expériences professionnelles d’agenceurs, de menuisiers traditionnels
      et de peintres nous ont donné envie d’entreprendre, nous avons donc créé
      cette entreprise en Aout 2016.
    </p>
  ),
  text: (
    <p>
      Nos exigences sont le gout d’un travail soigné, la maitrise d’un savoir
      faire technique indispensable à la réalisation de projets ambitieux et
      esthétiques. Nous travaillons les bois massifs, les panneaux et placages
      offrant une large gamme de création de mobilier sur mesure variant
      couleurs et textures au plus près de vos envies. Nous vous proposons des
      solutions clés en mains pour vos espaces de vie et de travail, avec des
      visuels 3D Nous réalisons entre autres vos cuisines, dressings, salles de
      bains, parquets, terrasses, volets… Nous pouvons aussi remplacer vos
      menuiseries extérieures. Nous vous proposons également peinture,
      revêtements muraux et effets de matières. N’hésitez pas à nous contacter
      pour tous vos projets…
    </p>
  ),
};

export default function Atelier() {
  const { meta, title, introSylvain, introEdwige, experienceText, text } =
    studioData;

  return (
    <div>
      <Meta typeMeta={meta} />
      <GlobalLink typeLink="return" />
      <h1>{title}</h1>
      {introSylvain}
      {introEdwige}
      {experienceText}
      {text}
      <GlobalLink typeLink="creations" />
      <GlobalLink typeLink="contact" />
    </div>
  );
}
