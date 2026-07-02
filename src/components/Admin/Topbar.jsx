// src/components/Topbar.jsx

import {
  Search,
  Bell,
  CircleHelp,
  Menu,
} from "lucide-react";

export default function Topbar({ onMenuToggle = () => {} }) {
  return (
    <header className="border-b border-gray-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-1 items-center gap-3">
          <button
            type="button"
            aria-label="Toggle sidebar"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 lg:hidden"
            onClick={onMenuToggle}
          >
            <Menu size={20} />
          </button>

          <div className="relative w-full sm:w-[280px] lg:w-[420px]">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search systems..."
              className="h-12 w-full rounded-xl border border-gray-300 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <button className="text-gray-600 transition hover:text-black">
            <Bell size={22} />
          </button>

          <button className="text-gray-600 transition hover:text-black">
            <CircleHelp size={22} />
          </button>

          <div className="h-8 w-px bg-gray-300" />

          <div className="flex cursor-pointer items-center gap-3">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="profile"
              className="h-10 w-10 rounded-full object-cover"
            />

            <span className="hidden text-[18px] font-medium text-blue-900 sm:block">
              Profile
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}