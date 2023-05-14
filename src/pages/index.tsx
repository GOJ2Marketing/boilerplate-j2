import Section from "@/comps/Section/Section";
import Row from "@/comps/Row/Row";
import Grid from "@/comps/Grid/Grid";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/comps/SEO/SEO";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { AnimateFadeRight } from "../utils/animations";

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <SEO title="Home" description="Homepage" image="/favicon.ico" url="/" />

      <motion.div>
        <Section id="Hero" ariaLabel="Page Title">
          <Row
            layoutId="Title"
            key="Home"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0 ,1] }}
            exit={{ opacity: [1, 0 ,0] }}
            transition={{ duration: 1 }}
          >
            <h1>Home Page</h1>
            <button onClick={() => router.push("/about")}>About Us</button>
          </Row>

          <Row>
            <Grid template="1fr 1fr" columns={2} gap={30} alignment="center">
              <motion.div
                layoutId="thumbnail"
                key={"homeThumb"}
                transition={{ duration: 1 }}
              >
                <Link href={"/about"}>
                  <Image
                    src={"/Filler-image.svg"}
                    alt="Filler Image"
                    width={1519}
                    height={759}
                  />
                </Link>
              </motion.div>

              <AnimatePresence mode="wait">
                {isVisible && (
                  <motion.div
                    layoutId="HomeInfo"
                    key={"HomeInfo"}
                    transition={{ duration: .5, staggerChildren: 1 }}
                  >
                    <motion.h2 {...AnimateFadeRight} key={"h2"}>J2 Boilerplate Info</motion.h2>
                    <motion.p {...AnimateFadeRight} key={"p"}>
                      This is an example of a Grid component. Use this to set
                      the grid layout for desktop, laptop, tablet, and mobile.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Grid>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
          </Row>
        </Section>
      </motion.div>
    </div>
  );
}
