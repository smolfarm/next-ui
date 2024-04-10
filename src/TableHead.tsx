/**
 *
 *                   _        ___
 *                  | |      / __)
 *   ___ ____   ___ | |    _| |__ _____  ____ ____
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 *
 * Component that generates a top row for a table based on provided columns.
 *
 */


type TableHeadProps = {
    children?: React.ReactNode
    className?: string
    columns?: {
        key: string
        title: string
    }[]
}

export default function TableHead(props: TableHeadProps) {
    let className = ""
    if (props.className) {
        className += `${props.className}`
    }

    if(props.columns && props.columns.length === 0) {
        return(
            <thead className={className}>
                <tr>
                    {props.columns?.map((column) => {
                        let className = "font-bold color-white px-8 py-2 mr-1"

                        if(props.columns[0] === column) {
                            className += "rounded-tl-lg"
                        }
                        if(props.columns[props.columns.length - 1] === column) {
                            className += "rounded-tr-lg"
                        }

                        return (
                            <th key={column.key} className={className}>
                                {column.title}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        )
    } else {
        return(
            <thead className={className}>
                {props.children}
            </thead>
        )
    }
}
