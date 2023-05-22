import Section from "@/comps/Section/Section";
import Row from "@/comps/Row/Row";
import Grid from "@/comps/Grid/Grid";
import Link from "next/link";
import { motion, AnimatePresence, stagger } from "framer-motion";
import SEO from "@/comps/SEO/SEO";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { AnimateFadeRight } from "../utils/animations";
import Slider from "@/comps/MotionSlider/MotionSlider";
import Blurb from "@/comps/Blurb/Blurb";

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
            animate={{ opacity: [0, 0, 1] }}
            exit={{ opacity: [1, 0, 0] }}
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
                    variants={AnimateFadeRight.parent}
                    initial="hidden"
                    animate={"visible"}
                    exit={"hidden"}
                  >
                    <motion.h2 key={"h2"} variants={AnimateFadeRight.child}>
                      J2 Boilerplate Info
                    </motion.h2>
                    <motion.p key={"p1"} variants={AnimateFadeRight.child}>
                      This is an example of a Grid component. Use this to set a
                      grid layout for desktop, laptop, tablet, and mobile.
                    </motion.p>
                    <motion.p key={"p2"} variants={AnimateFadeRight.child}>
                      Check the README for more information.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </Grid>
            <button onClick={() => setIsVisible(!isVisible)}>Toggle</button>
          </Row>
        </Section>

        <Section>
          <Row>
            <Grid columns={3} template="1fr 1fr 1fr" gap={30}>
              <Blurb
                title="Service 1"
                image="/sample-pic-1.jpg"
                desc="This is a sample sentence. This should provide a brief description about the above service."
                link="/"
              />
              <Blurb
                title="Service 2"
                image="/sample-pic-2.jpg"
                desc="This is a sample sentence. This should provide a brief description about the above service."
                link="/"
              />
              <Blurb
                title="Service 3"
                desc="This is a sample sentence. This should provide a brief description about the above service."
                link="/"
                // imageRatio={35}
              />
            </Grid>
          </Row>
        </Section>

        <Section>
          <Row>
            <Slider />
          </Row>
        </Section>
      </motion.div>
    </div>
  );
}
