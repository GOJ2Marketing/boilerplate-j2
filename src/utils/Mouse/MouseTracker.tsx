import { motion } from 'framer-motion';
import { atom, useAtom } from 'jotai';
import { FC, useCallback, useEffect } from 'react';
import { COLORS } from '../tailwindStyles';

export const mouseDefault = atom(
    {
        x: 0, 
        y: 0,
        hover: undefined as HTMLElement | undefined,
        text: undefined as string | undefined,
        color: undefined as string | undefined,
        state: undefined as string | undefined,
    }
);

const MouseTracker: FC = () => {
    // Use the atom to get and set the mouse position
    const [mouseState, setMouseState] = useAtom(mouseDefault);

    // Uncomment to track mouse state changes
    // useEffect(() => {
    //     console.log("Mouse State: ", mouseState);
    //     // if(mouseState.hover) console.log(mouseState.hover.offsetWidth);
    // }, [mouseState])

    const handleMouseMove = useCallback((event: MouseEvent) => {
        setMouseState(prevState => ({
            ...prevState,
            x: event.clientX,
            y: event.clientY
        }));
    }, [setMouseState]);

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [handleMouseMove]);

    const colorMap = {
        primary: COLORS.primary,
        secondary: COLORS.secondary,
        light: COLORS.light,
        dark: COLORS.dark,
        default: '#fff' // Default color
    };

    const bgColor = colorMap[mouseState.color as keyof typeof colorMap] || colorMap.default;

    return (
        <motion.div 
            className='fixed top-0 left-0 w-0 h-0 pointer-events-none' 
            animate={{ x: mouseState.x, y: mouseState.y }}
            transition={{ x: { type: 'spring', duration: 0.01 }, y: { type: 'spring', duration: 0.01 } }}
        >
            <motion.div 
                className={`w-5 h-5 rounded-full -translate-x-1/2 -translate-y-1/2`}
                style={{ transition: "background-color 400ms ease-in-out 0ms" }}
                animate={{ backgroundColor: bgColor }}
            /> 
        </motion.div>
    );
};

export default MouseTracker;
