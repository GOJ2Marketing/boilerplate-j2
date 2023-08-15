"use client"
import { motion, MotionProps } from "framer-motion";

interface RowProps extends MotionProps {
    children: React.ReactNode;
    className?: string;
}

export default function Row({ children, className = "", ...rest }: RowProps) {
    const rowClass = "mx-auto py-8 max-w-screen-2xl w-4/5";

    return (
        <motion.div className={`${rowClass} ${className}`} {...rest}>
            {children}
        </motion.div>
    );
}