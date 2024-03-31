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
 * React component for a simple button to standardize button styles across the app.
 *
 */
type ButtonProps = {
    children?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    type?: 'button' | 'submit' | 'reset';
    onClick?: (e: React.MouseEvent) => void;
    disabled?: boolean;
};
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
