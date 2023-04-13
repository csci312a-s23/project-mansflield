import "../styles/globals.css";
import Head from "next/head";
import DiningHallView from "../components/DiningHallView";

export default function App({ Component, pageProps }) {
  <Component {...pageProps} />;
  return (
    <div>
      <Head>
        <title>MealHow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">MealHow</h1>
        <DiningHallView />
      </main>

      <footer>CS 312 Project</footer>
    </div>
  );
}
