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
    completion: number;
    size?: "md" | "lg";
};
export default function ProgressBar(props: ProgressBarProps): import("react/jsx-runtime").JSX.Element;
export {};