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

export default function FormattedNumber({ value, className }: { value: number, className?: string }) {
    if(!value)
        value = 0

    return (
        <span className={className}>
            {value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </span>
    )
}