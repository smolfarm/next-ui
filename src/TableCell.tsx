/**
 *
 *                   _        ___
 *                  | |      / __)
 *   ___ ____   ___ | |    _| |__ _____  ____ ____
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 *
 * Component for standardizing how table cells are displayed.
 *
 */

type TableCellProps = {
    children?: React.ReactNode
    className?: string
}

export default function TableCell(props: TableCellProps) {
    let className = "px-8 py-2"
    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <td className={className}>
            {props.children}
        </td>
    )
}
