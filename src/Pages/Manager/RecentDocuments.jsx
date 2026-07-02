import {
  ChevronLeft,
  ChevronRight,
  Clock3,
  FileSpreadsheet,
  FileText,
  Folder,
  MoreVertical,
  Search,
} from "lucide-react";
import { useState } from "react";
import MainLayout from "../../layout/MainLayout";

const recentDocuments = [
  {
    name: "Project Proposal.pdf",
    owner: "Manager",
    opened: "May 16, 2025 10:30 AM",
    size: "2.4 MB",
    type: "PDF",
    kind: "pdf",
  },
  {
    name: "Q2 Financial Report.xlsx",
    owner: "Manager",
    opened: "May 15, 2025 09:20 AM",
    size: "1.8 MB",
    type: "Excel",
    kind: "excel",
  },
  {
    name: "Project Alpha",
    owner: "Manager",
    opened: "May 14, 2025 04:45 PM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
];

const iconClass = {
  folder: "bg-amber-100 text-amber-500",
  pdf: "bg-red-100 text-red-600",
  excel: "bg-emerald-100 text-emerald-600",
};

function DocumentIcon({ kind }) {
  const className = `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
    iconClass[kind] || "bg-slate-100 text-slate-500"
  }`;

  if (kind === "folder") {
    return (
      <div className={className}>
        <Folder size={22} fill="currentColor" strokeWidth={1.7} />
      </div>
    );
  }

  if (kind === "excel") {
    return (
      <div className={className}>
        <FileSpreadsheet size={20} />
      </div>
    );
  }

  return (
    <div className={className}>
      <FileText size={20} />
    </div>
  );
}

export default function RecentDocuments() {
  const [search, setSearch] = useState("");

  const filteredDocuments = recentDocuments.filter((doc) =>
    `${doc.name} ${doc.owner} ${doc.type}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  return (
    <MainLayout>
      <div className="space-y-6">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
              <Clock3 size={27} />
              Recent Documents
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Quickly access your recently opened documents.
            </p>
          </div>

          <label className="relative block lg:w-[340px]">
            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
  type="search"
  placeholder="Search recent documents..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>
          </label>
        </section>

        <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] table-fixed text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
                  <th className="w-[32%] px-6 py-5">Name</th>
                  <th className="w-[17%] px-5 py-5">Owner</th>
                  <th className="w-[25%] px-5 py-5">Last Opened</th>
                  <th className="w-[10%] px-5 py-5">Size</th>
                  <th className="w-[10%] px-5 py-5">Type</th>
                  <th className="w-[6%] px-5 py-5 text-right">Actions</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-200">
  {filteredDocuments.length > 0 ? (
    filteredDocuments.map((document) => (
      <tr
        key={document.name}
        className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
      >
        <td className="px-6 py-5">
          <div className="flex items-center gap-4">
            <DocumentIcon kind={document.kind} />
            <span className="truncate">{document.name}</span>
          </div>
        </td>

        <td className="px-5 py-5">{document.owner}</td>

        <td className="px-5 py-5">{document.opened}</td>

        <td className="px-5 py-5">{document.size}</td>

        <td className="px-5 py-5">{document.type}</td>

        <td className="px-5 py-5">
          <div className="flex justify-end">
            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
            >
              <MoreVertical size={20} />
            </button>
          </div>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan={6}
        className="py-10 text-center text-slate-500"
      >
        No recent documents found.
      </td>
    </tr>
  )}
</tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-500">
              Showing 1 to 3 of 3 results
            </p>
            <div className="flex items-center gap-3">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
                <ChevronLeft size={19} />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-sm font-semibold text-white">
                1
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-400">
                <ChevronRight size={19} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
