import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Styles from "./Blurb.module.scss";

interface BlurbProps {
  link?: string;
  image?: string | 'none';
  imageRatio?: number;
  title: string;
  desc: string;
  className?: string;
}

const Blurb = ({
  link,
  image,
  imageRatio,
  title,
  desc,
  className,
}: BlurbProps) => {
  const paddingStyle = { padding: `${imageRatio}% 0` };
  const imageSrc = image || "/Filler-Image.svg";

  const renderImage = () => <Image src={imageSrc} alt={title} fill={true} />;

  return (
    <motion.div className={`${Styles.blurb} ${className && className}`}>
      {image !== 'none' && (
        <div className={Styles.image}>
          {link ? (
            <Link href={link} style={paddingStyle}>
              {renderImage()}
            </Link>
          ) : (
            <div style={paddingStyle}>{renderImage()}</div>
          )}
        </div>
      )}

      <div className={Styles.desc}>
        <h3>{title}</h3>
        <p>{desc}</p>
        {link && <Link href={link}>Learn more</Link>}
      </div>
    </motion.div>
  );
};

export default Blurb;
