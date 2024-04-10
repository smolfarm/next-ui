/**
 *
 *                   _        ___
 *                  | |      / __)
 *   ___ ____   ___ | |    _| |__ _____  ____ ____
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 *
 * Component for standardizing how tables are displayed.
 *
 */


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
