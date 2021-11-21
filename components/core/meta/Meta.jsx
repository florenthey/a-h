import Head from "next/head";
import { metaValues } from "./metaValues";

export default function Meta({ typeMeta }) {
  return metaValues.map((meta) => {
    const { typeMetaValue, name, description } = meta;

    if (typeMeta === typeMetaValue) {
      return (
        <Head key={name}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <title>{name}</title>
        </Head>
      );
    }
  });
}
