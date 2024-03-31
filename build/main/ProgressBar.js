import { jsx as _jsx } from "react/jsx-runtime";
export default function ProgressBar(props) {
    const { completion } = props;
    // The bar looks weird with 0-1% completion, so we'll just make it 1% for the bar
    const barWidth = (completion > 0 && completion < 1 ? 1 : completion).toFixed(2);
    const size = props.size === "lg" ? "h-5" : "h-2.5";
    return (_jsx("div", { className: `w-[100%] rounded-full ${size} mb-4 bg-gray-700`, children: _jsx("div", { className: `bg-blue-600 ${size} rounded-full bg-blue-500`, style: { width: barWidth + "%" } }) }));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvUHJvZ3Jlc3NCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFtQkEsTUFBTSxDQUFDLE9BQU8sVUFBVSxXQUFXLENBQUMsS0FBdUI7SUFDdkQsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUU1QixpRkFBaUY7SUFDakYsTUFBTSxRQUFRLEdBQUcsQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRS9FLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQTtJQUVsRCxPQUFNLENBQ0YsY0FBSyxTQUFTLEVBQUUseUJBQXlCLElBQUksbUJBQW1CLFlBQzVELGNBQUssU0FBUyxFQUFFLGVBQWUsSUFBSSwyQkFBMkIsRUFBRSxLQUFLLEVBQUUsRUFBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBQyxHQUFRLEdBQ3BHLENBQ1QsQ0FBQTtBQUNMLENBQUMifQ==