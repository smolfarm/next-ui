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

import React from 'react'

type ContainerProps = {
    children: React.ReactNode
    className?: string
    main?: boolean
}

export default function Container(props: ContainerProps) {
    const { children } = props

    // Append any class names provided to the standard classes for this component
    let className = "mx-auto w-[95%] lg:w-[75%] "
    if (props.className) {
        className += props.className
    }

    // If this is a main container, use a <main> tag instead of a <div>
    if(props.main) {
        return(
            <main className={className}>
                {children}
            </main>
        )
    }

    return (
        <div className={className}>
            {children}
        </div>
    )
}
