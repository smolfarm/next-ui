import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/**
 *
 *                   _        ___
 *                  | |      / __)
 *   ___ ____   ___ | |    _| |__ _____  ____ ____
 *  /___)    \ / _ \| |   (_   __|____ |/ ___)    \
 * |___ | | | | |_| | |     | |  / ___ | |   | | | |
 * (___/|_|_|_|\___/ \_)    |_|  \_____|_|   |_|_|_|
 *
 * Component for displaying a certain number of stars.
 *
 */
export default function Stars({ count }) {
    const classes = [];
    for (let i = 0; i < 5; i++) {
        if (i < count) {
            classes.push('w-4 h-4 text-yellow-300 ms-1');
        }
        else {
            classes.push('w-4 h-4 ms-1 text-gray-300 dark:text-gray-500');
        }
    }
    return (_jsxs("div", { className: "flex items-center", children: [_jsx("svg", { className: classes[0], "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20", children: _jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }) }), _jsx("svg", { className: classes[1], "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20", children: _jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }) }), _jsx("svg", { className: classes[2], "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20", children: _jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }) }), _jsx("svg", { className: classes[3], "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20", children: _jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }) }), _jsx("svg", { className: classes[4], "aria-hidden": "true", xmlns: "http://www.w3.org/2000/svg", fill: "currentColor", viewBox: "0 0 22 20", children: _jsx("path", { d: "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" }) })] }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhcnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvU3RhcnMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7R0FXRztBQUVILE1BQU0sQ0FBQyxPQUFPLFVBQVUsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFO0lBQ25DLE1BQU0sT0FBTyxHQUFVLEVBQUUsQ0FBQTtJQUV6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3hCLElBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQTtTQUMvQzthQUFNO1lBQ0gsT0FBTyxDQUFDLElBQUksQ0FBQywrQ0FBK0MsQ0FBQyxDQUFBO1NBQ2hFO0tBQ0o7SUFFRCxPQUFNLENBQ0YsZUFBSyxTQUFTLEVBQUMsbUJBQW1CLGFBQzlCLGNBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxXQUFXLFlBQ3JILGVBQU0sQ0FBQyxFQUFDLCtTQUErUyxHQUFFLEdBQ3ZULEVBQ04sY0FBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBYyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFdBQVcsWUFDckgsZUFBTSxDQUFDLEVBQUMsK1NBQStTLEdBQUUsR0FDdlQsRUFDTixjQUFLLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLGlCQUFjLE1BQU0sRUFBQyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxPQUFPLEVBQUMsV0FBVyxZQUNySCxlQUFNLENBQUMsRUFBQywrU0FBK1MsR0FBRSxHQUN2VCxFQUNOLGNBQUssU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWMsTUFBTSxFQUFDLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxXQUFXLFlBQ3JILGVBQU0sQ0FBQyxFQUFDLCtTQUErUyxHQUFFLEdBQ3ZULEVBQ04sY0FBSyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxpQkFBYyxNQUFNLEVBQUMsS0FBSyxFQUFDLDRCQUE0QixFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsT0FBTyxFQUFDLFdBQVcsWUFDckgsZUFBTSxDQUFDLEVBQUMsK1NBQStTLEdBQUUsR0FDdlQsSUFDSixDQUNULENBQUE7QUFDTCxDQUFDIn0=