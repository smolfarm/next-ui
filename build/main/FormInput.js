import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FormInput = (props) => {
    const { id, label, value, onChange, onBlur, multiline, type, error, hint, maxLength, defaultValue } = props;
    let className = "lg:w-1/2 shadow text-xl appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-slate-200 text-black dark:bg-slate-700 dark:text-white";
    let errorValue = error;
    let hintValue = hint;
    // Handle errors not being passed in to the component
    if (maxLength && value.length > maxLength) {
        errorValue = "Maximum length is " + maxLength + " characters.";
    }
    const hintClass = errorValue ? "text-red-600 lg:w-1/2 mt-1 text-sm" : "lg:w-1/2 mt-1 text-sm";
    const hintDisplay = errorValue ? errorValue : hintValue;
    // Calculate our class name based on whether or not we have an error
    if (!errorValue) {
        className += " focus:border-blue-600";
    }
    else {
        className += " border-red-600";
    }
    const field = !multiline ?
        _jsx("input", { className: className, id: id, name: id, value: value, onChange: onChange, onBlur: onBlur, defaultValue: defaultValue, type: type ?? "text" })
        :
            _jsx("textarea", { className: className, rows: 5, id: id, name: id, onChange: onChange, onBlur: onBlur, defaultValue: defaultValue, value: value });
    return (_jsxs("div", { className: "mt-4", children: [_jsx("label", { className: "block text-lg font-bold mb-2 text-black dark:text-white", htmlFor: id, children: label }), field, _jsx("div", { className: hintClass, children: hintDisplay })] }));
};
export default FormInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9ybUlucHV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0Zvcm1JbnB1dC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQTZCQSxNQUFNLFNBQVMsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRTtJQUN4QyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUUzRyxJQUFJLFNBQVMsR0FBRywwTUFBME0sQ0FBQTtJQUUxTixJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUE7SUFDdEIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFBO0lBRXBCLHFEQUFxRDtJQUNyRCxJQUFHLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtRQUN0QyxVQUFVLEdBQUcsb0JBQW9CLEdBQUcsU0FBUyxHQUFHLGNBQWMsQ0FBQTtLQUNqRTtJQUVELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFBO0lBQzdGLE1BQU0sV0FBVyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7SUFFdkQsb0VBQW9FO0lBQ3BFLElBQUcsQ0FBQyxVQUFVLEVBQUU7UUFDWixTQUFTLElBQUksd0JBQXdCLENBQUE7S0FDeEM7U0FBTTtRQUNILFNBQVMsSUFBSSxpQkFBaUIsQ0FBQTtLQUNqQztJQUVELE1BQU0sS0FBSyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDZCxnQkFDSSxTQUFTLEVBQUUsU0FBUyxFQUNwQixFQUFFLEVBQUUsRUFBRSxFQUNOLElBQUksRUFBRSxFQUFFLEVBQ1IsS0FBSyxFQUFFLEtBQUssRUFDWixRQUFRLEVBQUUsUUFBUSxFQUNsQixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxZQUFZLEVBQzFCLElBQUksRUFBRSxJQUFJLElBQUksTUFBTSxHQUFJO1FBQzVCLENBQUM7WUFDRCxtQkFDSSxTQUFTLEVBQUUsU0FBUyxFQUNwQixJQUFJLEVBQUUsQ0FBQyxFQUNQLEVBQUUsRUFBRSxFQUFFLEVBQ04sSUFBSSxFQUFFLEVBQUUsRUFDUixRQUFRLEVBQUUsUUFBUSxFQUNsQixNQUFNLEVBQUUsTUFBTSxFQUNkLFlBQVksRUFBRSxZQUFZLEVBQzFCLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQTtJQUdoQyxPQUFPLENBQ0gsZUFBSyxTQUFTLEVBQUMsTUFBTSxhQUNqQixnQkFBTyxTQUFTLEVBQUMseURBQXlELEVBQUMsT0FBTyxFQUFFLEVBQUUsWUFDakYsS0FBSyxHQUNGLEVBRVAsS0FBSyxFQUNOLGNBQUssU0FBUyxFQUFFLFNBQVMsWUFBRyxXQUFXLEdBQU8sSUFDNUMsQ0FFVCxDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsZUFBZSxTQUFTLENBQUEifQ==