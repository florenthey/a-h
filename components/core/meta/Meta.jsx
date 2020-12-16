import Head from "next/head";
import { metas } from "../../../services/Metas";

const Meta = ({ typeMeta }) => {
  return metas.map((type) => {
    if (typeMeta === type.typeMetaValue) {
      const { name, description } = type;
      return (
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <title>{name}</title>
        </Head>
      );
    }
  });
};

export default Meta;
