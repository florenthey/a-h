import Layout from "@components/core/layout/Layout";
import { GalleryPlayerProvider } from "@context/useGalleryPlayer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GalleryPlayerProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GalleryPlayerProvider>
    </>
  );
}
