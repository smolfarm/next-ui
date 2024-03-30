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
 * React component for a link that looks like a button.
 *
 */
type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};
export default function LinkButton({ href, children, className }: LinkButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
