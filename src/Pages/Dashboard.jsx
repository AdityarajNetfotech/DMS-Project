import Sidebar from "../components/Sidebar";
import TopNavbar from "../components/TopNavbar";

const cards = [
  { title: "TOTAL TENANTS", value: "142" },
  { title: "ACTIVE", value: "128" },
  { title: "SUSPENDED", value: "14" },
  { title: "TOTAL USERS", value: "12.4k" },
  { title: "DOCUMENTS", value: "1.2M" },
  { title: "STORAGE", value: "4.2 TB" },
];

export default function Dashboard() {
  return (
    <div className="flex bg-slate-50 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <TopNavbar />

        <div className="p-8">
          <div className="flex justify-between">
            <div>
              <h1 className="text-5xl font-bold">
                Global Overview
              </h1>

              <p className="text-gray-500 mt-2">
                Real-time infrastructure health and tenant metrics.
              </p>
            </div>

            <div className="flex gap-3">
              <button className="border px-4 py-2 rounded-xl bg-white">
                Last 30 Days
              </button>

              <button className="border px-4 py-2 rounded-xl bg-white">
                Export Report
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-6 gap-4 mt-8">
            {cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-2xl border p-6 shadow-sm"
              >
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-3">
                  {card.value}
                </h2>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-white rounded-2xl border p-6 h-96">
              <h2 className="text-2xl font-semibold">
                Tenant Growth
              </h2>

              <div className="h-72 bg-gray-100 rounded-xl mt-6 flex items-center justify-center">
                Chart Here
              </div>
            </div>

            <div className="bg-white rounded-2xl border p-6 h-96">
              <h2 className="text-2xl font-semibold">
                Storage Consumption
              </h2>

              <div className="h-72 bg-gray-100 rounded-xl mt-6 flex items-center justify-center">
                Chart Here
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-2xl border p-6 h-80">
              <h2 className="text-xl font-semibold">
                User Activity
              </h2>
            </div>

            <div className="bg-white rounded-2xl border p-6 h-80">
              <h2 className="text-xl font-semibold">
                Document Upload Trends
              </h2>
            </div>

            <div className="bg-white rounded-2xl border p-6 h-80">
              <h2 className="text-xl font-semibold">
                Recent Activity
              </h2>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-2xl border mt-8 overflow-hidden">
            <div className="p-5 border-b font-semibold">
              Tenant Health Status
            </div>

            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-4 text-left">Tenant Name</th>
                  <th className="p-4 text-left">Region</th>
                  <th className="p-4 text-left">Uptime</th>
                  <th className="p-4 text-left">Latency</th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-t">
                  <td className="p-4">Acme Global</td>
                  <td className="p-4">US-EAST-1</td>
                  <td className="p-4">99.998%</td>
                  <td className="p-4 text-blue-600">12ms</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Stellar Dynamics</td>
                  <td className="p-4">EU-WEST-2</td>
                  <td className="p-4">99.995%</td>
                  <td className="p-4 text-blue-600">18ms</td>
                </tr>

                <tr className="border-t">
                  <td className="p-4">Cyberdyne Systems</td>
                  <td className="p-4">AP-SOUTH-1</td>
                  <td className="p-4">98.240%</td>
                  <td className="p-4 text-red-500">142ms</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}