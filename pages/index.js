import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Introduction from "../components/Introduction";
import About from "../components/about/About";
import Experience from "../components/experience/Experience";
import DrawerAppBar from "../components/DrawerAppBar";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";

export default function Home() {
  // const ScrollContainer = dynamic(() =>
  //   import("react-scroll-motion").then((mod) => mod.ScrollContainer)
  // );
  // const ScrollPage = dynamic(() =>
  //   import("react-scroll-motion").then((mod) => mod.ScrollPage)
  // );
  return (
    <>
      <Head>
        <title>Michael Atkins Website</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <DrawerAppBar />
      <main>
        <Introduction />
        <About />
        <Experience />
        <Skills />
        <Projects />
      </main>
    </>
  );
}
