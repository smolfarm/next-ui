import { jsx as _jsx } from "react/jsx-runtime";
const Button = (props) => {
    const { children, onClick, disabled } = props;
    let className = "button font-bold py-2 px-4 rounded-lg";
    if (disabled) {
        className = "button bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-lg";
    }
    const size = props.size ?? "lg";
    className += " text-" + size;
    return (_jsx("button", { type: props.type ?? "button", onClick: onClick, className: className, children: children }));
};
export default Button;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0J1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQXdCQSxNQUFNLE1BQU0sR0FBRyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtJQUNsQyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFN0MsSUFBSSxTQUFTLEdBQUcsdUNBQXVDLENBQUE7SUFFdkQsSUFBRyxRQUFRLEVBQUU7UUFDVCxTQUFTLEdBQUcsZ0ZBQWdGLENBQUE7S0FDL0Y7SUFFRCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQTtJQUUvQixTQUFTLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQTtJQUU1QixPQUFNLENBQ0YsaUJBQ0ksSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLElBQUksUUFBUSxFQUM1QixPQUFPLEVBQUUsT0FBTyxFQUNoQixTQUFTLEVBQUUsU0FBUyxZQUFHLFFBQVEsR0FBVSxDQUNoRCxDQUFBO0FBQ0wsQ0FBQyxDQUFBO0FBRUQsZUFBZSxNQUFNLENBQUEifQ==