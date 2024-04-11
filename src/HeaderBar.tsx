import React from 'react'

type HeaderBarProps = {
    className?: string
    children?: React.ReactNode
}

export default function HeaderBar(props: HeaderBarProps) {
    const className = props.className ? " " + props.className  : ""

    return (
        <div className={`w-full py-2 px-3 bg-teal-700 hidden lg:block align-middle${className}`}>
            {props.children}
        </div>
    )
}
