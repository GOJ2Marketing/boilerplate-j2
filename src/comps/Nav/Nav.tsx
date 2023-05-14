import Image from "next/image";
import Grid from "../Grid/Grid";
import Row from "../Row/Row";
import Section from "../Section/Section";
import { motion } from "framer-motion"; 
import Link from "next/link";
import Styles from "./Nav.module.scss";
import { LOGO_HORIZONTAL, NAV_LINKS } from "@/utils/constants";

const Nav = () => {
    return ( 
        <Section padding="none" className={Styles.navigation}>
            <Row className={Styles.navInnerWrapper}>
                    
                    {/* Logo */}
                    <motion.div id={"Logo"} className={Styles.logoWrapper}>
                        <Image src={LOGO_HORIZONTAL} alt="Logo" height={100} width={1000} className={Styles.logo} />
                    </motion.div>
                    
                    {/* Links */}
                    <motion.div className={Styles.navLinks}>
                        {NAV_LINKS.map((link, index) => (
                            <Link key={index} href={link.href}>{link.label}</Link>
                        ))}
                    </motion.div>
            
            </Row>
        </Section>
     );
}
 
export default Nav;