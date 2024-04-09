type TextProps = {
    children?: React.ReactNode
    className?: string
}

export default function Text(props: TextProps) {
    let className = "my-6"
    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <p className={className}>
            {props.children}
        </p>
    )
}
