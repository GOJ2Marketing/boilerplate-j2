import { mouseDefault } from "./MouseTracker"; 
import { useAtom } from "jotai";

interface MouseContainerProps {
    className?:string,
    text?: string; 
    color?: string;
    state?: string;
    children: React.ReactNode
}

export default function MouseContainer({className, text, color, state, children}:MouseContainerProps) {
    const [, setMouseState] = useAtom(mouseDefault);

    const handleMouseEnter = (e:any) => {
        // console.log("E: ", e.target);

        setMouseState(prevState => ({
            ...prevState,
            hover: e.target,
            text: text,
            color: color,
            state: state,
        }));
    }

    const handleMouseLeave = () => {
        setMouseState(prevState => ({
            ...prevState,
            hover: undefined,
            text: undefined,
            color: undefined,
            state: undefined,
        }));
    }
    
    return (
        <div className={className} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
        </div>
    )
}