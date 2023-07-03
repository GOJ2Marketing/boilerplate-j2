import "@/styles/globals.scss";
import { AnimatePresence, motion, AnimateSharedLayout } from "framer-motion";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { AppProps } from "next/app";
import Lenis from "@studio-freight/lenis";
import Nav from "@/comps/Nav/Nav";
import { ActiveSectionProvider } from "@/utils/contexts";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const pageKey = router.asPath;

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.08,
    });

    // Set up a requestAnimationFrame loop to call the raf method of the lenis instance
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <ActiveSectionProvider>
      <motion.div layoutId="Navigation" key={router.route + "123"}>
        <Nav />
      </motion.div>
      <motion.div layoutId="main">
        <Component {...pageProps} key={pageKey} />
      </motion.div>
    </ActiveSectionProvider>
  );
}
