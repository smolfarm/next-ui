type TableProps = {
    children?: React.ReactNode
    className?: string
}

export default function Table(props: TableProps) {
    let className = "w-full"
    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <table className={className}>
            {props.children}
        </table>
    )
}
