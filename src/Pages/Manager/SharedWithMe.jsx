import {
  ChevronLeft,
  ChevronRight,
  FileSpreadsheet,
  FileText,
  MoreVertical,
  Search,
  Share2,
} from "lucide-react";

import MainLayout from "../../layout/MainLayout";
import { useState } from "react";
const sharedDocuments = [
  {
    name: "Finance Review.pdf",
    sharedBy: "Sarah Parker",
    sharedOn: "May 16, 2025 11:20 AM",
    size: "2.6 MB",
    access: "View",
    kind: "pdf",
  },
  {
    name: "Team Budget.xlsx",
    sharedBy: "Robert Brown",
    sharedOn: "May 15, 2025 03:45 PM",
    size: "1.8 MB",
    access: "Edit",
    kind: "excel",
  },
  {
    name: "Policy Update.docx",
    sharedBy: "Emily Clark",
    sharedOn: "May 14, 2025 09:10 AM",
    size: "960 KB",
    access: "View",
    kind: "doc",
  },
];

const iconClass = {
  pdf: "bg-red-100 text-red-600",
  excel: "bg-emerald-100 text-emerald-600",
  doc: "bg-blue-100 text-blue-600",
};

function DocumentIcon({ kind }) {
  const className = `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
    iconClass[kind] || "bg-slate-100 text-slate-500"
  }`;

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

export default function SharedWithMe() {
  const [search, setSearch] = useState("");

  const filteredDocuments = sharedDocuments.filter((doc) =>
    `${doc.name} ${doc.sharedBy} ${doc.access}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <MainLayout>
      <div className="space-y-6">
        <section className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="flex items-center gap-3 text-2xl font-bold tracking-normal text-slate-950 md:text-3xl">
              <Share2 size={27} />
              Shared with Me
            </h1>
            <p className="mt-3 text-base text-slate-500">
              View documents shared with your account.
            </p>
          </div>

          <label className="relative block lg:w-[340px]">
            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />
            <input
  type="search"
  placeholder="Search shared documents..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm font-medium text-slate-700 shadow-sm outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>
          </label>
        </section>

        <section className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] table-fixed text-left">
              <thead>
                <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
                  <th className="w-[30%] px-6 py-5">Name</th>
                  <th className="w-[18%] px-5 py-5">Shared By</th>
                  <th className="w-[24%] px-5 py-5">Shared On</th>
                  <th className="w-[10%] px-5 py-5">Size</th>
                  <th className="w-[10%] px-5 py-5">Access</th>
                  <th className="w-[8%] px-5 py-5 text-right">Actions</th>
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

        <td className="px-5 py-5">{document.sharedBy}</td>

        <td className="px-5 py-5">{document.sharedOn}</td>

        <td className="px-5 py-5">{document.size}</td>

        <td className="px-5 py-5">
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
            {document.access}
          </span>
        </td>

        <td className="px-5 py-5">
          <div className="flex justify-end">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100">
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
        No shared documents found.
      </td>
    </tr>
  )}
</tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-medium text-slate-500">
              Showing {filteredDocuments.length} of {sharedDocuments.length} results
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
