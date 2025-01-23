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

type TableHeaderCellProps = {
    children?: React.ReactNode
    className?: string
}

export default function TableHeaderCell(props: TableHeaderCellProps) {
    let className = "font-bold text-white bg-gradient-to-b from-teal-400/70 to-teal-700/70 px-8 py-2 mr-1"
    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <th className={className}>
            {props.children}
        </th>
    )
}
