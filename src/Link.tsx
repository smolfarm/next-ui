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
 * Component that standardizes the style and functionality of basic links. Mostly a wrapper for Next's Link.
 *
 */

import Link from "next/link"

export default function SmolLink(props: any) {
    let className = "text-teal-800 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300 "
    className += props.className ? props.className : ""

    return (
        <Link {...props} className={className}>
            {props.children}
        </Link>
    )
}