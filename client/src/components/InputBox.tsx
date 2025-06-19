export interface InputProps {
    size: "xs" | "sm" | "md" | "lg",
    placeholder: string,
    classname?: string
    reference?: any;
}

const sizeVariants = {
    xs: "py-1 px-2",
    sm: "py-2 px-3",
    md: "py-3 px-4",
    lg: "py-4 px-5"
}

const defaultStyles = "rounded-xl border"

export const InputBox = (props: InputProps) => {
  return (
    <input className={`${sizeVariants[props.size]} ${defaultStyles} ${props.classname}`} placeholder={props.placeholder} ref={props.reference}>

    </input>
  )
}