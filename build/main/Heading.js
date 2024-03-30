import { jsx as _jsx } from "react/jsx-runtime";
export default function Heading(props) {
    const { children, size } = props;
    const headerSize = size ?? 1;
    if (headerSize === 1) {
        return _jsx("h1", { className: "text-4xl mt-6 mb-2 font-bold", children: children });
    }
    else if (headerSize === 2) {
        return _jsx("h2", { className: "text-2xl mt-4 mb-2 font-bold", children: children });
    }
    else if (headerSize === 3) {
        return _jsx("h3", { className: "text-xl mt-3 mb-1 font-bold", children: children });
    }
    else {
        return _jsx("h4", { className: "text-lg mt-2 mb-1 font-bold", children: children });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9IZWFkaW5nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBS0EsTUFBTSxDQUFDLE9BQU8sVUFBVSxPQUFPLENBQUMsS0FBbUI7SUFDL0MsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFFaEMsTUFBTSxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQTtJQUU1QixJQUFHLFVBQVUsS0FBSyxDQUFDLEVBQUU7UUFDakIsT0FBTyxhQUFJLFNBQVMsRUFBQyw4QkFBOEIsWUFBRSxRQUFRLEdBQU0sQ0FBQTtLQUN0RTtTQUFNLElBQUcsVUFBVSxLQUFLLENBQUMsRUFBRTtRQUN4QixPQUFPLGFBQUksU0FBUyxFQUFDLDhCQUE4QixZQUFFLFFBQVEsR0FBTSxDQUFBO0tBQ3RFO1NBQU0sSUFBRyxVQUFVLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLE9BQU8sYUFBSSxTQUFTLEVBQUMsNkJBQTZCLFlBQUUsUUFBUSxHQUFNLENBQUE7S0FDckU7U0FBTTtRQUNILE9BQU8sYUFBSSxTQUFTLEVBQUMsNkJBQTZCLFlBQUUsUUFBUSxHQUFNLENBQUE7S0FDckU7QUFDTCxDQUFDIn0=