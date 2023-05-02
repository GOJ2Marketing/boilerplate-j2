import Styles from './Section.module.scss'

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    ref?: string;
}

const Section = ({ children, className, ref, ...rest }: SectionProps) => {
    return ( 
        <section className={className ? `${Styles.section} ${className}` : Styles.section} ref={ref} {...rest}>
            {children}
        </section>
     );
}
 
export default Section