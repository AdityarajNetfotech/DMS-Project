import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "PDF", value: 45 },
  { name: "DOCX", value: 30 },
  { name: "XLSX", value: 25 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
];

export default function StorageOverview() {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        Storage Overview
      </h2>

      <div className="h-[250px]">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={90}
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-3 mt-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between"
          >
            <span>{item.name}</span>

            <span className="font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}