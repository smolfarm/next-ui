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
 * Component for putting other things inside of a standardized container.
 *
 */
type ContainerProps = {
    children: React.ReactNode;
    className?: string;
    main?: boolean;
};
export default function Container(props: ContainerProps): import("react/jsx-runtime").JSX.Element;
export {};
