import Head from "next/head";
import Navbar from "../Components/Navbar";
import Intro from "../Components/Intro";
import Experience from "../Components/Experience";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Skills from "../Components/Skills";
import { useRef, useState } from "react";

export default function Home() {
  const intRef = useRef(null);
  const expRef = useRef(null);
  const sklRef = useRef(null);
  const prjRef = useRef(null);
  const conRef = useRef(null);

  const ref = { intRef, sklRef, expRef, prjRef, conRef };

  const executeScroll = (componentRef) => {
    componentRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full">
      <Head>
        <title>Varshini Nathala</title>
        <meta name="description" content="Portfolio website of Varshini Nathala" />
      </Head>
      <div className="fixed top-0 left-0 right-0">
        <Navbar executeScroll={executeScroll} refs={ref} />
      </div>
      <main className="h-full">
        <Intro refer={intRef} bgColor="bg-black" />
        <Skills refer={sklRef} bgColor="bg-black" />
        <Experience refer={expRef} bgColor="bg-black" />
        <Projects refer={prjRef} bgColor="bg-black" />
        <Contact refer={conRef} bgColor="bg-black" />
      </main>
    </div>
  );
}
