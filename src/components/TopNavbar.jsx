import {
  Bell,
  Settings,
  Search,
} from "lucide-react";

export default function TopNavbar() {
  return (
    <div className="h-20 bg-white border-b px-8 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <h1 className="text-4xl font-bold text-blue-700">
          DMS Super Admin
        </h1>

        <div className="relative">
          <Search
            className="absolute left-3 top-3 text-gray-400"
            size={18}
          />

          <input
            placeholder="Global Search..."
            className="pl-10 w-80 py-2 bg-gray-100 rounded-xl outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button>Dashboard</button>
        <button>Tenants</button>
        <button>Security</button>
        <button>Audit</button>

        <Bell />
        <Settings />

        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40"
            alt=""
            className="w-10 h-10 rounded-full"
          />

          <div>
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-gray-500">
              SUPER ADMINISTRATOR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}