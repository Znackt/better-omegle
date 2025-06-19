import { useRef } from "react";
import { InputBox } from "./InputBox";

interface CardProps {
    size: "sm" | "md" | "lg" | "xl",
    color: "primary" | "secondary",
}

const sizeVariants = {
    sm: "w-74 h-104",
    md: "w-140 h-160",
    lg: "w-160 h-180",
    xl: "w-200 h-220",
}

const colorVariant = {
    primary: "bg-blue-500",
    secondary: "bg-green-500",
}

const defaultStyles = "flex flex-col rounded-xl justify-center items-center"

export const Card = (props: CardProps) => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const passwordRef = useRef<HTMLInputElement | null>(null);

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const signup = () => {
        
    }

    return (
        <div className={`${colorVariant[props.color]} ${sizeVariants[props.size]} ${defaultStyles}`}>
            <div className="flex flex-col justify-center items-center gap-4">
                {<InputBox size="xs" placeholder="Enter your Email" reference={email}/>}
                {<InputBox size="xs" placeholder="Enter your Password" reference={password}/>}
            </div>
            <div className="flex flex-col w-[70%] m-4">
                <button className="py-1 rounded-full border" onClick={signup}>
                    Signup!
                </button>
            </div>
        </div>
    )
}