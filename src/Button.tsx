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

import React from 'react'

type ButtonProps = {
    children?: React.ReactNode,
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl',
    type?: 'button' | 'submit' | 'reset',
    onClick?: (e: React.MouseEvent) => void,
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
    const { children, onClick, disabled } = props

    let className = "bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg"

    if(disabled) {
        className = "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg"
    }

    const size = props.size ?? "lg"

    className += " text-" + size

    return(
        <button
            type={props.type ?? "button"}
            onClick={onClick}
            className={className}>{children}</button>
    )
}

export default Button
