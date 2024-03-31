/**
 *
 *                   _        ___
 *                  | |      / __)
 *   ___ ____   ___ | |    _| |__ _____  ____ ____
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 *
 *
 * React component that formats a number to include commas.
 *
 */

export default function FormattedNumber({ children, className }: { children: number, className?: string }) {
    if(!children)
        children = 0

    return (
        <span className={className}>
            {children.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
    )
}
