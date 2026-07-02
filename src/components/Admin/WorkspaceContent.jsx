// src/components/WorkspaceContent.jsx

import { useState } from "react";
import {
  Palette,
  Plus,
  MoreVertical,
  Hash,
  Calendar,
  ChevronDown,
  Upload,
} from "lucide-react";

export default function WorkspaceContent() {
  const [selectedColor, setSelectedColor] = useState("#0B2C87");

  const metadata = [
    {
      name: "Project ID",
      type: "Number",
      icon: <Hash size={16} />,
      status: "Active",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Retention Date",
      type: "Date",
      icon: <Calendar size={16} />,
      status: "Active",
      color: "bg-green-100 text-green-700",
    },
    {
      name: "Confidentiality Level",
      type: "Dropdown",
      icon: <ChevronDown size={16} />,
      status: "Required",
      color: "bg-yellow-100 text-yellow-700",
    },
  ];

  const colors = [
    "#0B2C87",
    "#2845C7",
    "#4338CA",
    "#6B21A8",
    "#0F172A",
  ];

  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F7FB] p-4 sm:p-6 lg:p-8">
      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Workspace Configuration
          </h1>

          <p className="text-gray-500 mt-2">
            Manage organization branding, metadata schemas,
            and global security policies.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="px-6 py-3 border border-gray-300 rounded-xl bg-white font-medium hover:bg-gray-50">
            Discard Changes
          </button>

          <button className="px-6 py-3 rounded-xl bg-[#0B2C87] text-white font-medium hover:bg-[#082064]">
            Save Config
          </button>
        </div>
      </div>

      {/* ================= TOP GRID ================= */}

      <div className="mt-8 grid gap-6 xl:grid-cols-2">
        {/* ========================================= */}
        {/* Branding & Identity */}
        {/* ========================================= */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <Palette className="text-[#0B2C87]" />

            <h2 className="text-2xl font-semibold">
              Branding & Identity
            </h2>
          </div>

          {/* Organization Name */}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Organization Name
            </label>

            <input
              type="text"
              value="Nexus Global Corp"
              readOnly
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none bg-white"
            />
          </div>

          {/* Upload Logo */}

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Workspace Logo
            </label>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex items-center gap-5 hover:bg-gray-50 cursor-pointer">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center">
                <Upload className="text-gray-500" />
              </div>

              <div>
                <h4 className="font-semibold text-[#0B2C87]">
                  Upload new logo
                </h4>

                <p className="text-sm text-gray-500">
                  SVG, PNG, JPG (max. 2MB)
                </p>
              </div>
            </div>
          </div>

          {/* Brand Colors */}

          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-4">
              Primary Brand Color
            </label>

            <div className="flex gap-4">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-12 h-12 rounded-xl border-4 transition
                    ${
                      selectedColor === color
                        ? "border-gray-400 scale-105"
                        : "border-transparent"
                    }`}
                  style={{ backgroundColor: color }}
                />
              ))}

              <button className="w-12 h-12 rounded-xl border bg-gray-100 flex items-center justify-center">
                +
              </button>
            </div>
          </div>
        </div>

        {/* ========================================= */}
        {/* Custom Metadata Fields */}
        {/* ========================================= */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6">
          {/* Header */}

          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">
              Custom Metadata Fields
            </h2>

            <button className="text-[#0B2C87] font-semibold flex items-center gap-2">
              <Plus size={18} />
              Add Field
            </button>
          </div>

          {/* Table Header */}

          <div className="grid grid-cols-4 text-sm font-semibold text-gray-500 border-b pb-4">
            <span>Field Name</span>
            <span>Data Type</span>
            <span>Status</span>
            <span></span>
          </div>

          {/* Rows */}

          {metadata.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center py-6 border-b border-gray-100"
            >
              <span className="font-medium text-gray-800">
                {item.name}
              </span>

              <div className="flex items-center gap-2 text-gray-600">
                {item.icon}
                {item.type}
              </div>

              <span
                className={`w-fit px-3 py-1 rounded-full text-sm font-medium ${item.color}`}
              >
                {item.status}
              </span>

              <div className="flex justify-end">
                <MoreVertical
                  size={18}
                  className="cursor-pointer text-gray-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PART 2 CONTINUES BELOW */}

      {/* ================= BOTTOM GRID ================= */}

<div className="mt-6 grid gap-6 xl:grid-cols-2">
  {/* Folder Structure Templates */}

  <div className="bg-white rounded-2xl border border-gray-200 p-6">
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-semibold">
        Folder Structure Templates
      </h2>

      <button className="text-[#0B2C87] font-semibold">
        Create New Template
      </button>
    </div>

    {/* Template 1 */}

    <div className="border rounded-2xl p-5">
      <h3 className="font-semibold text-lg">
        Standard Project Template
      </h3>

      <div className="mt-4 space-y-3 text-gray-600">
        <div className="flex items-center gap-2">
          📁 Planning & Scope
        </div>

        <div className="flex items-center gap-2">
          📁 Design Assets
        </div>

        <div className="flex items-center gap-2">
          📁 Compliance Docs
        </div>
      </div>
    </div>

    {/* Template 2 */}

    <div className="border rounded-2xl p-5 mt-4">
      <h3 className="font-semibold text-lg">
        Legacy Archive Template
      </h3>

      <p className="text-gray-500 mt-2">
        Long-term document archival structure.
      </p>
    </div>
  </div>

  {/* Security & Policy */}

  <div className="bg-white rounded-2xl border border-gray-200 p-6 relative">
    <h2 className="text-2xl font-semibold mb-6">
      Security & Policy
    </h2>

    {/* Session Timeout */}

    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Session Timeout
      </label>

      <select className="w-full border border-gray-300 rounded-xl px-4 py-3">
        <option>30 Minutes</option>
        <option>1 Hour</option>
        <option>2 Hours</option>
      </select>
    </div>

    {/* Idle Log-off */}

    <div className="flex items-center justify-between border rounded-xl p-4">
      <div>
        <h4 className="font-medium">Idle Log-off</h4>

        <p className="text-sm text-gray-500">
          Automatically log out inactive users.
        </p>
      </div>

      <button className="w-14 h-8 bg-[#0B2C87] rounded-full relative">
        <div className="absolute right-1 top-1 w-6 h-6 bg-white rounded-full" />
      </button>
    </div>

    {/* Password Complexity */}

    <div className="mt-8">
      <h3 className="font-semibold text-lg mb-4">
        Password Complexity
      </h3>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Minimum Length
          </span>

          <span className="font-semibold">
            12 Characters
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-600">
            Password Rotation
          </span>

          <span className="font-semibold">
            Every 90 Days
          </span>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked
            readOnly
            className="w-5 h-5"
          />

          <span>Require MFA</span>
        </div>
      </div>
    </div>

    {/* Floating Add Button */}

    <button className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-[#0B2C87] text-white text-2xl shadow-lg hover:scale-105 transition">
      +
    </button>
  </div>
</div>

{/* Configuration Overview */}

<div className="mt-6 bg-[#071C4D] rounded-3xl p-8 text-white">
  <h2 className="text-2xl font-semibold">
    Configuration Overview
  </h2>

  <p className="mt-4 text-gray-300 max-w-3xl leading-7">
    Changes applied here will affect 1,240 active users
    across 12 regional offices.
  </p>

  <p className="mt-2 text-gray-300">
    All security policies adhere to ISO 27001
    standards.
  </p>
</div>
    </div>
  );
}