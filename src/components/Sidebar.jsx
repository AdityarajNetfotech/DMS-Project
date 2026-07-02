import {
  Shield,
  LayoutDashboard,
  Building2,
  Activity,
  ShieldAlert,
  Database,
  Settings,
  CircleHelp,
  Code,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Overview" },
  { icon: Building2, label: "Tenant Management" },
  { icon: Activity, label: "System Health" },
  { icon: ShieldAlert, label: "Security Logs" },
  { icon: Database, label: "Storage Pools" },
  { icon: Settings, label: "Global Config" },
];

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-white border-r flex flex-col">
      <div className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-3 rounded-xl">
            <Shield className="text-white" size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-lg">DMS Control</h2>
            <p className="text-sm text-gray-500">Super Admin Console</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6 hover:bg-blue-700">
          + New Tenant
        </button>
      </div>

      <div className="flex-1 p-4">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 text-left transition
            ${
              index === 0
                ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                : "hover:bg-gray-100"
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </button>
        ))}
      </div>

      <div className="border-t p-4">
        <button className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
          <CircleHelp size={18} />
          Support
        </button>

        <button className="flex items-center gap-3 w-full px-3 py-2 hover:bg-gray-100 rounded-lg">
          <Code size={18} />
          API Docs
        </button>
      </div>
    </div>
  );
}