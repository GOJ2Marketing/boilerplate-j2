import Section from "@/comps/Section/Section";
import Row from "@/comps/Row/Row";
import Grid from "@/comps/Grid/Grid";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

export default function AboutUs() {
  const router = useRouter();

  return (
    <div>
      <AnimatePresence mode="wait">
        <Section id="Hero" ariaLabel="Page Title" padding="noTop">
          <motion.div
            layoutId="thumbnail"
            key={"aboutThumb"}
            initial={{ scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={"/Filler-image.svg"}
              alt="Filler Image"
              width={1519}
              height={759}
            />
          </motion.div>

          <Row
            layoutId="Title"
            key="About"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0 ,1] }}
            exit={{ opacity: [1, 0 ,0] }}
            transition={{ duration: 1 }}
          >
            <h1>About Us</h1>
            <button onClick={() => router.push("/")}>Home</button>
          </Row>
        </Section>
      </AnimatePresence>

      <Section
        id="intro"
        ariaLabel="Introduction to my page"
        data-section={"make custom data-* attributes"}
      >
        <Row>
          <h1>About Us</h1>
        </Row>
        <Row fullWidth={false}>
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
          <Link href="/">Home</Link>
        </Row>
      </Section>
    </div>
  );
}
