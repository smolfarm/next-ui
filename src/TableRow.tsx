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

type TableRowProps = {
    children?: React.ReactNode
    className?: string
}

export default function TableRow(props: TableRowProps) {
    let className = "even:bg-slate-200 odd:bg-slate-300 dark:even:bg-slate-700 dark:odd:bg-slate-800"
    if (props.className) {
        className += ` ${props.className}`
    }

    return(
        <tr className={className}>
            {props.children}
        </tr>
    )
}
