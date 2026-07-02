const items = [
  { label: "Documents", value: 65 },
  { label: "Images", value: 20 },
  { label: "Videos", value: 10 },
  { label: "Others", value: 5 },
];

export default function StorageUsage() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">
        Storage Usage
      </h3>

      <div className="mt-6 space-y-5">
        {items.map((item) => (
          <div key={item.label}>
            <div className="mb-2 flex justify-between text-sm">
              <span>{item.label}</span>
              <span>{item.value}%</span>
            </div>

            <div className="h-2 rounded-full bg-slate-100">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}