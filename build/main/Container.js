import { jsx as _jsx } from "react/jsx-runtime";
export default function Container(props) {
    const { children } = props;
    // Append any class names provided to the standard classes for this component
    let className = "mx-auto w-[95%] lg:w-[75%] ";
    if (props.className) {
        className += props.className;
    }
    // If this is a main container, use a <main> tag instead of a <div>
    if (props.main) {
        return (_jsx("main", { className: className, children: children }));
    }
    return (_jsx("div", { className: className, children: children }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL0NvbnRhaW5lci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQW9CQSxNQUFNLENBQUMsT0FBTyxVQUFVLFNBQVMsQ0FBQyxLQUFxQjtJQUNuRCxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsS0FBSyxDQUFBO0lBRTFCLDZFQUE2RTtJQUM3RSxJQUFJLFNBQVMsR0FBRyw2QkFBNkIsQ0FBQTtJQUM3QyxJQUFJLEtBQUssQ0FBQyxTQUFTLEVBQUU7UUFDakIsU0FBUyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUE7S0FDL0I7SUFFRCxtRUFBbUU7SUFDbkUsSUFBRyxLQUFLLENBQUMsSUFBSSxFQUFFO1FBQ1gsT0FBTSxDQUNGLGVBQU0sU0FBUyxFQUFFLFNBQVMsWUFDckIsUUFBUSxHQUNOLENBQ1YsQ0FBQTtLQUNKO0lBRUQsT0FBTyxDQUNILGNBQUssU0FBUyxFQUFFLFNBQVMsWUFDcEIsUUFBUSxHQUNQLENBQ1QsQ0FBQTtBQUNMLENBQUMifQ==