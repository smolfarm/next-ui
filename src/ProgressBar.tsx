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
 * React component for a progress bar.
 *
 */

type ProgressBarProps = {
    completion: number,
    size?: "md" | "lg"
}

export default function ProgressBar(props: ProgressBarProps) {
    const { completion } = props

    // The bar looks weird with 0-1% completion, so we'll just make it 1% for the bar
    const barWidth = (completion > 0 && completion < 1 ? 1 : completion).toFixed(2)

    const size = props.size === "lg" ? "h-5" : "h-2.5"

    return(
        <div className={`w-[100%] rounded-full ${size} mb-4 bg-gray-700`}>
            <div className={`bg-blue-600 ${size} rounded-full bg-blue-500`} style={{width: barWidth + "%"}}></div>
        </div>
    )
}
