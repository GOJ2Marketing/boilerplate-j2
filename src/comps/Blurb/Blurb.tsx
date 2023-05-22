import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Styles from "./Blurb.module.scss";

interface BlurbProps {
    link: string;
    image: string;
    imageRatio?: number;
    title: string;
    desc: string;
}

const Blurb = ({ link, image, imageRatio, title, desc }: BlurbProps) => {
  return (
    <motion.div className={Styles.blurb}>
      <div className={Styles.image}>
        <Link href={link} style={{ padding: `${imageRatio}% 0` }}>
          <Image src={image} alt={title} fill={true} />
        </Link>
      </div>

      <div className={Styles.desc}>
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link href={link}>Learn more</Link>
      </div>
    </motion.div>
  );
};

export default Blurb;
