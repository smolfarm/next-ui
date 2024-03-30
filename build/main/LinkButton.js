import { jsx as _jsx } from "react/jsx-runtime";
import Link from 'next/link';
export default function LinkButton({ href, children, className }) {
    let finalClassName = "button font-bold py-2 px-4 rounded-lg";
    if (className) {
        finalClassName += " " + className;
    }
    return (_jsx(Link, { href: href, className: finalClassName, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlua0J1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9MaW5rQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBb0JBLE9BQU8sSUFBSSxNQUFNLFdBQVcsQ0FBQTtBQUU1QixNQUFNLENBQUMsT0FBTyxVQUFVLFVBQVUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFtQjtJQUM3RSxJQUFJLGNBQWMsR0FBRyx1Q0FBdUMsQ0FBQTtJQUM1RCxJQUFHLFNBQVMsRUFBRTtRQUNWLGNBQWMsSUFBSSxHQUFHLEdBQUcsU0FBUyxDQUFBO0tBQ3BDO0lBRUQsT0FBTyxDQUNILEtBQUMsSUFBSSxJQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLGNBQWMsWUFBRyxRQUFRLEdBQVEsQ0FDakUsQ0FBQTtBQUNMLENBQUMifQ==