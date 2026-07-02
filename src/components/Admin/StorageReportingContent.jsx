// src/components/StorageReportingContent.jsx

import {
  Download,
  Users,
  FileText,
  Upload,
  RefreshCw,
  Trash2,
} from "lucide-react";

export default function StorageReportingContent() {
  return (
    <div className="flex-1 overflow-y-auto bg-[#F5F7FB] p-4 sm:p-6 lg:p-8">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex flex-col gap-4 border-b border-gray-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-[#0B2C87]">
            Storage & Reporting
          </h1>

          <p className="text-gray-500 mt-2">
            Real-time usage insights and operational
            compliance logs.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="px-5 py-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50">
            Schedule Report
          </button>

          <button className="px-5 py-3 bg-[#0B2C87] text-white rounded-xl flex items-center gap-2 hover:bg-[#081f63]">
            <Download size={18} />
            Export All Data
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* STORAGE OVERVIEW + FORECAST */}
      {/* ================================================= */}

      <div className="mt-8 grid gap-6 xl:grid-cols-[2fr_1fr]">
        {/* Storage Overview */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6 xl:col-span-1">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-semibold">
                Storage Overview
              </h2>

              <p className="text-gray-500">
                Global capacity utilization across all regions
              </p>
            </div>

            <div className="text-right">
              <h2 className="text-5xl font-bold text-[#0B2C87]">
                4.2
                <span className="text-2xl">TB</span>
              </h2>

              <p className="text-gray-500 mt-1">
                of 10TB used (42%)
              </p>
            </div>
          </div>

          {/* Progress */}

          <div className="w-full h-4 bg-gray-200 rounded-full mt-8 overflow-hidden">
            <div className="w-[42%] h-full bg-[#0B2C87]" />
          </div>

          {/* Analytics */}

          <div className="mt-10 grid gap-8 lg:grid-cols-3">
            {/* By Folder */}

            <div>
              <h3 className="font-semibold mb-5 uppercase tracking-wide text-gray-500">
                By Folder
              </h3>

              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Engineering</span>
                  <span>1.8 TB</span>
                </div>

                <div className="flex justify-between">
                  <span>Marketing</span>
                  <span>0.9 TB</span>
                </div>

                <div className="flex justify-between">
                  <span>Legal</span>
                  <span>0.5 TB</span>
                </div>
              </div>
            </div>

            {/* Document Type */}

            <div>
              <h3 className="font-semibold mb-5 uppercase tracking-wide text-gray-500">
                By Document Type
              </h3>

              <div className="flex items-end gap-4 h-40">
                <div className="w-10 h-28 bg-[#0B2C87] rounded-t"></div>
                <div className="w-10 h-20 bg-blue-700 rounded-t"></div>
                <div className="w-10 h-14 bg-cyan-700 rounded-t"></div>
                <div className="w-10 h-8 bg-gray-500 rounded-t"></div>
              </div>

              <div className="flex gap-4 mt-3 text-sm">
                <span>PDF</span>
                <span>MEDIA</span>
                <span>ZIP</span>
                <span>DOC</span>
              </div>
            </div>

            {/* Top Users */}

            <div>
              <h3 className="font-semibold mb-5 uppercase tracking-wide text-gray-500">
                Top Users
              </h3>

              <div className="space-y-5">
                {[85, 65, 45].map((width, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      U
                    </div>

                    <div className="flex-1">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          style={{ width: `${width}%` }}
                          className="h-full bg-[#0B2C87]"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Usage Forecast */}

        <div className="bg-[#071C4D] text-white rounded-2xl p-8">
          <h2 className="text-3xl font-semibold">
            Usage Forecast
          </h2>

          <p className="text-gray-300 mt-2">
            Based on current upload velocity
          </p>

          <div className="mt-16">
            <h1 className="text-7xl font-bold">
              84%
            </h1>

            <p className="text-xl mt-4">
              Estimated capacity by Q4 2024
            </p>
          </div>

          <div className="mt-10 border border-blue-800 rounded-2xl p-5 bg-blue-950/20">
            <h4 className="font-semibold">
              Recommendation:
            </h4>

            <p className="text-gray-300 mt-2 text-sm leading-6">
              Archive logs older than 180 days
              to reclaim 1.2 TB of hot storage.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* OPERATIONAL REPORTS */}
      {/* ================================================= */}

      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-semibold">
            Operational Reports
          </h2>

          <button className="text-[#0B2C87] font-semibold">
            View All Reports →
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <Upload />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: 2h ago
            </p>

            <h3 className="text-xl font-semibold mt-5">
              Uploads per Week
            </h3>

            <p className="text-gray-500 mt-2">
              Aggregate trends of inbound data streams
              across all sub-tenants.
            </p>

            <button className="mt-6 text-[#0B2C87] font-semibold flex items-center gap-2">
              <Download size={16} />
              DOWNLOAD PDF
            </button>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <Users />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: 1d ago
            </p>

            <h3 className="text-xl font-semibold mt-5">
              Active Users
            </h3>

            <p className="text-gray-500 mt-2">
              User engagement heatmaps and peak
              activity period logs.
            </p>

            <button className="mt-6 text-[#0B2C87] font-semibold flex items-center gap-2">
              <Download size={16} />
              DOWNLOAD CSV
            </button>
          </div>

          {/* Card 3 */}

          <div className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center">
              <FileText />
            </div>

            <p className="text-sm text-gray-500 mt-4">
              Last updated: 4h ago
            </p>

            <h3 className="text-xl font-semibold mt-5">
              Document Counts
            </h3>

            <p className="text-gray-500 mt-2">
              Detailed inventory breakdown including
              metadata audit trails.
            </p>

            <button className="mt-6 text-[#0B2C87] font-semibold flex items-center gap-2">
              <Download size={16} />
              DOWNLOAD XLSX
            </button>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* PART 2 CONTINUES BELOW */}
      {/* ================================================= */}

            {/* ================================================= */}
      {/* INTEGRATIONS MANAGEMENT */}
      {/* ================================================= */}

      <div className="bg-white rounded-2xl border border-gray-200 mt-8 overflow-hidden">
        {/* Header */}

        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">
              Integrations Management
            </h2>

            <p className="text-gray-500 mt-1">
              Manage external connectors and secure API credentials
            </p>
          </div>

          <button className="bg-[#0B2C87] text-white px-6 py-3 rounded-xl hover:bg-[#081f63]">
            Connect New App
          </button>
        </div>

        {/* AWS S3 */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              ☁️
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                AWS S3 Connector
              </h3>

              <p className="text-gray-500 text-sm">
                Primary archival storage target
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-green-600 font-medium">
              ● Active
            </span>

            <span className="text-gray-500">
              API Key: •••••••••4529
            </span>

            <RefreshCw
              size={18}
              className="cursor-pointer text-gray-500"
            />

            <Trash2
              size={18}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>

        {/* Google Cloud */}

        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
              🌐
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                Google Cloud Storage
              </h3>

              <p className="text-gray-500 text-sm">
                Redundant backup cluster
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-green-600 font-medium">
              ● Active
            </span>

            <span className="text-gray-500">
              API Key: •••••••••9812
            </span>

            <RefreshCw
              size={18}
              className="cursor-pointer text-gray-500"
            />

            <Trash2
              size={18}
              className="cursor-pointer text-red-500"
            />
          </div>
        </div>

        {/* Admin API Access */}

        <div className="p-6 bg-gray-50 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-lg">
              Admin API Access
            </h3>

            <p className="text-gray-500 mt-1">
              These keys allow full access to reporting endpoints.
              Handle with extreme caution.
            </p>
          </div>

          <button className="border border-[#0B2C87] text-[#0B2C87] px-6 py-3 rounded-xl hover:bg-blue-50">
            Generate New Admin Key
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* FOOTER */}
      {/* ================================================= */}

      <footer className="mt-10 border-t border-gray-200 pt-6 pb-4 flex justify-between items-center text-gray-500">
        <p>
          © 2024 AdminNexus System. All rights reserved.
        </p>

        <div className="flex gap-8">
          <button className="hover:text-[#0B2C87]">
            System Status
          </button>

          <button className="hover:text-[#0B2C87]">
            API Reference
          </button>

          <button className="hover:text-[#0B2C87]">
            Privacy Policy
          </button>
        </div>
      </footer>
       </div>
  );
}