import Head from "next/head";
import { metas } from "./metaValues";

export default function Meta({ typeMeta }) {
  return metas.map((type) => {
    const { typeMetaValue, name, description } = type;
    if (typeMeta === typeMetaValue) {
      return (
        <Head key={type}>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <title>{name}</title>
        </Head>
      );
    }
  });
}
