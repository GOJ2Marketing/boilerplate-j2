import Image from "next/image";
import Row from "../Row/Row";
import Section from "../Section/Section";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Styles from "./Nav.module.scss";
import { LOGO_HORIZONTAL, NAV_LINKS, SITE_NAME } from "@/utils/constants";
import { useState } from "react";
import { MenuDropDown } from "@/utils/animations";

const Nav = () => {
  const [activeLink, setActiveLink] = useState<number | null>(null);

  return (
    <Section padding="none" className={Styles.navigation}>
      <Row className={Styles.navInnerWrapper}>
        {/* Logo */}
        <Link href={"/"} id={"Logo"} className={Styles.logoWrapper}>
          <Image
            src={LOGO_HORIZONTAL}
            alt={SITE_NAME}
            title={SITE_NAME}
            height={100}
            width={1000}
            className={Styles.logo}
          />
        </Link>

        {/* Links */}
        <motion.div className={Styles.navLinks}>
          {NAV_LINKS.map((link, index) => (
            <motion.div
              key={index}
              className={Styles.topLink}
              onHoverStart={() => setActiveLink(index)}
              onHoverEnd={() => setActiveLink(null)}
            >
              <Link href={link.href}>{link.label}</Link>
              <AnimatePresence>
                {link.subMenu &&
                  link.subMenu.length > 0 &&
                  activeLink === index && (
                    <motion.ul
                      className={Styles.subMenu}
                      initial={"hidden"}
                      animate={"visible"}
                      exit={"hidden"}
                      variants={MenuDropDown.parent}
                      transition={{ duration: 0.1 }}
                    >
                      {link.subMenu.map((subLink, subIndex) => (
                        <motion.li
                          key={subIndex}
                          variants={MenuDropDown.child}
                        >
                          <Link href={subLink.href}>{subLink.label}</Link>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </Row>
    </Section>
  );
};

export default Nav;
