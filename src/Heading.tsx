type HeadingProps = {
    size?: Number,
    children?: React.ReactNode,
    className?: string
}

export default function Heading(props: HeadingProps) {
    const { children, size } = props

    const headerSize = size ?? 1

    const className = props.className ? " " + props.className  : ""

    if(headerSize === 1) {
        return <h1 className={"text-4xl mt-6 mb-2 font-bold" + className}>{children}</h1>
    } else if(headerSize === 2) {
        return <h2 className={"text-2xl mt-4 mb-2 font-bold" + className}>{children}</h2>
    } else if(headerSize === 3) {
        return <h3 className={"text-xl mt-3 mb-1 font-bold" + className}>{children}</h3>
    } else {
        return <h4 className={"text-lg mt-2 mb-1 font-bold" + className}>{children}</h4>
    }
}
