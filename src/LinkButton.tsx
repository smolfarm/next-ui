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
}

import Link from 'next/link'

export default function LinkButton({ href, children, className }: LinkButtonProps) {
    let finalClassName = "bg-teal-800 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg"
    if(className) {
        finalClassName += " " + className
    }

    return (
        <Link href={href} className={finalClassName}>{children}</Link>
    )
}