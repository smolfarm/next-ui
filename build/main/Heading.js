import { jsx as _jsx } from "react/jsx-runtime";
export default function Heading(props) {
    const { children, size } = props;
    const headerSize = size ?? 1;
    const className = props.className ? " " + props.className : "";
    if (headerSize === 1) {
        return _jsx("h1", { className: "text-6xl mt-8 mb-4 font-bold" + className, children: children });
    }
    else if (headerSize === 2) {
        return _jsx("h2", { className: "text-4xl mt-6 mb-2 font-bold" + className, children: children });
    }
    else if (headerSize === 3) {
        return _jsx("h3", { className: "text-2xl mt-4 mb-1 font-bold" + className, children: children });
    }
    else {
        return _jsx("h4", { className: "text-xl mt-2 mb-1 font-bold" + className, children: children });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBTUEsTUFBTSxDQUFDLE9BQU8sVUFBVSxPQUFPLENBQUMsS0FBbUI7SUFDL0MsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQTtJQUU1QixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBRSxDQUFDLENBQUMsRUFBRSxDQUFBO0lBRS9ELElBQUcsVUFBVSxLQUFLLENBQUMsRUFBRTtRQUNqQixPQUFPLGFBQUksU0FBUyxFQUFFLDhCQUE4QixHQUFHLFNBQVMsWUFBRyxRQUFRLEdBQU0sQ0FBQTtLQUNwRjtTQUFNLElBQUcsVUFBVSxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLGFBQUksU0FBUyxFQUFFLDhCQUE4QixHQUFHLFNBQVMsWUFBRyxRQUFRLEdBQU0sQ0FBQTtLQUNwRjtTQUFNLElBQUcsVUFBVSxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLGFBQUksU0FBUyxFQUFFLDhCQUE4QixHQUFHLFNBQVMsWUFBRyxRQUFRLEdBQU0sQ0FBQTtLQUNwRjtTQUFNO1FBQ0gsT0FBTyxhQUFJLFNBQVMsRUFBRSw2QkFBNkIsR0FBRyxTQUFTLFlBQUcsUUFBUSxHQUFNLENBQUE7S0FDbkY7QUFDTCxDQUFDIn0=