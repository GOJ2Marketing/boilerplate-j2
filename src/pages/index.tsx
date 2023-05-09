import Section from "@/comps/Section/Section";
import Row from "@/comps/Row/Row";
import Grid from "@/comps/Grid/Grid";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/comps/SEO/SEO";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <AnimatePresence mode="wait">
      <SEO
        title="Home"
        description="Homepage"
        image="/favicon.ico"
        url="/"
      />
      <motion.div
        layoutId="Hero"
        key="HomeHero"
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        exit={{ x: -100 }}
      >
        <Section id="Hero" ariaLabel="Page Title">
          <Row>
            <h1>Home Page</h1>
            <button onClick={() => router.push('/about')}>About Us</button>
          </Row>
        </Section>
      </motion.div>

      <Section
        id="intro"
        ariaLabel="Introduction to my page"
        data-section={"make custom data-* attributes"}
      >
        <Row>
          <Grid
            columns={3}
            template="2fr 1fr 1fr"
            gap={30}
            laptop="3fr 2fr 2fr"
            tablet="1fr 1fr"
            phone="100%"
          >
            <div>
              <h2>Heading 2 Text</h2>
            </div>
            <div>
              <h3>Heading 3 Text</h3>
              <p>
                This is a sample paragraph. This is for testing purposes only
                and is made to take up space on the screen.
              </p>
            </div>
            <div>
              <h3>Heading 3 Text</h3>
              <p>
                This is a sample paragraph. This is for testing purposes only
                and is made to take up space on the screen.
              </p>
            </div>
          </Grid>
          <Link href="/about">About Us</Link>
        </Row>
      </Section>
    </AnimatePresence>
  );
}
