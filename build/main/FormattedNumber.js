import { jsx as _jsx } from "react/jsx-runtime";
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
 * React component that formats a number to include commas.
 *
 */
export default function FormattedNumber({ value, className }) {
    if (!value)
        value = 0;
    return (_jsx("span", { className: className, children: value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybWF0dGVkTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Zvcm1hdHRlZE51bWJlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7R0FZRztBQUVILE1BQU0sQ0FBQyxPQUFPLFVBQVUsZUFBZSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBeUM7SUFDL0YsSUFBRyxDQUFDLEtBQUs7UUFDTCxLQUFLLEdBQUcsQ0FBQyxDQUFBO0lBRWIsT0FBTyxDQUNILGVBQU0sU0FBUyxFQUFFLFNBQVMsWUFDckIsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxHQUFHLENBQUMsR0FDcEQsQ0FDVixDQUFBO0FBQ0wsQ0FBQyJ9