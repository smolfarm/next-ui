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
    id: string,
    label: string,
    value?: any,
    onChange?: (e: React.ChangeEvent) => void,
    onBlur?: (e: React.ChangeEvent) => void,
    multiline?: boolean,
    type?: string,
    error?: string,
    hint?: string,
    defaultValue?: string,

    maxLength?: number,
}

const FormInput = (props: FormInputProps) => {
    const { id, label, value, onChange, onBlur, multiline, type, error, hint, maxLength, defaultValue } = props

    let className = "lg:w-1/2 shadow text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200 text-black dark:bg-slate-700 dark:text-white"

    let errorValue = error
    let hintValue = hint

    // Handle errors not being passed in to the component
    if(maxLength && value.length > maxLength) {
        errorValue = "Maximum length is " + maxLength + " characters."
    }

    const hintClass = errorValue ? "text-red-600 lg:w-1/2 mt-1 text-sm" : "lg:w-1/2 mt-1 text-sm"
    const hintDisplay = errorValue ? errorValue : hintValue

    // Calculate our class name based on whether or not we have an error
    if(!errorValue) {
        className += " focus:border-blue-600"
    } else {
        className += " border-red-600"
    }

    const field = !multiline ?
                <input
                    className={className}
                    id={id}
                    name={id}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    type={type ?? "text"} />
                :
                <textarea
                    className={className}
                    rows={5}
                    id={id}
                    name={id}
                    onChange={onChange}
                    onBlur={onBlur}
                    defaultValue={defaultValue}
                    value={value} />


    return (
        <div className="mt-4">
            <label className="block text-lg font-bold mb-2 text-black dark:text-white" htmlFor={id}>
                {label}
            </label>

            {field}
            <div className={hintClass}>{hintDisplay}</div>
        </div>

    )
}

export default FormInput
