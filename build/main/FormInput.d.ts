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
 * React component for displaying input fields on a form, handling things like different input types, error messages, and hints.
 *
 */
type FormInputProps = {
    id: string;
    label: string;
    value?: any;
    onChange?: (e: React.ChangeEvent) => void;
    onBlur?: (e: React.ChangeEvent) => void;
    multiline?: boolean;
    type?: string;
    error?: string;
    hint?: string;
    defaultValue?: string;
    maxLength?: number;
};
declare const FormInput: (props: FormInputProps) => import("react/jsx-runtime").JSX.Element;
export default FormInput;
