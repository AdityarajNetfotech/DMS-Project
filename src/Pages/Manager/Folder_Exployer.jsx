import {
  ChevronDown,
  ChevronRight,
  ChevronsUpDown,
  FileSpreadsheet,
  FileText,
  Folder,
  Grid2X2,
  List,
  MoreVertical,
  Plus,
  Presentation,
  Search,
} from "lucide-react";
import { useState } from "react";

import MainLayout from "../../layout/MainLayout";

const folderTree = [
  {
    name: "Project Alpha",
    active: true,
    open: true,
    children: ["Planning", "Resources", "Reports"],
  },
  {
    name: "HR Documents",
    open: false,
  },
  {
    name: "Finance",
    open: false,
  },
  {
    name: "Marketing",
    open: false,
  },
  {
    name: "Archive",
    open: false,
  },
];

const folderItems = [
  {
    name: "Planning",
    modified: "May 16, 2025 10:30 AM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
  {
    name: "Resources",
    modified: "May 15, 2025 01:40 PM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
  {
    name: "Reports",
    modified: "May 14, 2025 06:10 PM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
  {
    name: "Project Plan.docx",
    modified: "May 16, 2025 10:15 AM",
    size: "2.1 MB",
    type: "Word",
    kind: "word",
  },
  {
    name: "Requirement Sheet.pdf",
    modified: "May 15, 2025 12:30 PM",
    size: "1.3 MB",
    type: "PDF",
    kind: "pdf",
  },
  {
    name: "Budget Estimate.xlsx",
    modified: "May 14, 2025 11:05 AM",
    size: "1.7 MB",
    type: "Excel",
    kind: "excel",
  },
  {
    name: "Project Overview.pptx",
    modified: "May 13, 2025 04:20 PM",
    size: "3.2 MB",
    type: "PowerPoint",
    kind: "powerpoint",
  },
  {
    name: "Meeting Notes.pdf",
    modified: "May 12, 2025 09:25 AM",
    size: "850 KB",
    type: "PDF",
    kind: "pdf",
  },
];

const iconStyles = {
  folder: "bg-amber-100 text-amber-500",
  word: "bg-blue-100 text-blue-700",
  pdf: "bg-red-100 text-red-600",
  excel: "bg-emerald-100 text-emerald-600",
  powerpoint: "bg-orange-100 text-orange-600",
};

function ItemIcon({ kind }) {
  const className = `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
    iconStyles[kind] || "bg-slate-100 text-slate-500"
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

  if (kind === "powerpoint") {
    return (
      <div className={className}>
        <Presentation size={20} />
      </div>
    );
  }

  return (
    <div className={className}>
      <FileText size={20} />
    </div>
  );
}

export default function FolderExployer() {
  const [search, setSearch] = useState("");

  const filteredItems = folderItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <MainLayout>
      <div className="space-y-8">
        <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-normal text-slate-950">
              Folder Explorer
            </h1>
            <p className="mt-3 text-base text-slate-500">
              Browse and manage your folders and documents.
            </p>

            <nav className="mt-5 flex items-center gap-3 text-sm font-medium">
              <span className="text-blue-700">Home</span>
              <ChevronRight size={16} className="text-slate-400" />
              <span className="text-slate-900">Project Alpha</span>
            </nav>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <label className="relative block sm:w-[320px]">
              <Search
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />
              <input
  type="search"
  placeholder="Search in Project Alpha..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
/>
            </label>

            <div className="flex rounded-lg border border-slate-200 bg-white p-1">
              <button
                className="inline-flex h-10 w-11 items-center justify-center rounded-md text-slate-600 transition hover:bg-slate-50"
                aria-label="Grid view"
              >
                <Grid2X2 size={18} />
              </button>
              <button
                className="inline-flex h-10 w-11 items-center justify-center rounded-md border border-blue-600 bg-blue-50 text-blue-700"
                aria-label="List view"
              >
                <List size={19} />
              </button>
            </div>

            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">
              <Plus size={19} />
              New Folder
            </button>
          </div>
        </section>

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[300px_minmax(0,1fr)]">
          <aside className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-semibold text-slate-900">
              <ChevronDown size={17} />
              <Folder size={21} />
              My Documents
            </div>

            <div className="mt-2 space-y-1">
              {folderTree.map((folder) => (
                <div key={folder.name}>
                  <button
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold transition ${
                      folder.active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {folder.open ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                    <Folder size={20} />
                    {folder.name}
                  </button>

                  {folder.children ? (
                    <div className="ml-9 border-l border-slate-200 py-1">
                      {folder.children.map((child) => (
                        <button
                          key={child}
                          className="flex w-full items-center gap-3 px-4 py-2 text-left text-sm font-medium text-slate-700 transition hover:text-blue-700"
                        >
                          <Folder size={19} />
                          {child}
                        </button>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </aside>

          <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px] table-fixed text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
                    <th className="w-[34%] px-7 py-5">Name</th>
                    <th className="w-[26%] px-6 py-5">
                      <button className="inline-flex items-center gap-2">
                        Last Modified
                        <ChevronsUpDown size={16} />
                      </button>
                    </th>
                    <th className="w-[12%] px-6 py-5">Size</th>
                    <th className="w-[16%] px-6 py-5">Type</th>
                    <th className="w-[12%] px-7 py-5 text-right">Actions</th>
                  </tr>
                </thead>

                {/* <tbody className="divide-y divide-slate-200">
                  {filteredItems.map((item) => (
                    <tr
                      key={item.name}
                      className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
                    >
                      <td className="px-7 py-5">
                        <div className="flex items-center gap-4">
                          <ItemIcon kind={item.kind} />
                          <span className="truncate">{item.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-slate-800">
                        {item.modified}
                      </td>
                      <td className="px-6 py-5">{item.size}</td>
                      <td className="px-6 py-5">{item.type}</td>
                      <td className="px-7 py-5">
                        <div className="flex justify-end">
                          <button
                            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
                            aria-label={`Open actions for ${item.name}`}
                          >
                            <MoreVertical size={20} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody> */}
                <tbody className="divide-y divide-slate-200">
  {filteredItems.length > 0 ? (
    filteredItems.map((item) => (
      <tr
        key={item.name}
        className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
      >
        <td className="px-7 py-5">
          <div className="flex items-center gap-4">
            <ItemIcon kind={item.kind} />
            <span className="truncate">{item.name}</span>
          </div>
        </td>

        <td className="px-6 py-5 text-slate-800">
          {item.modified}
        </td>

        <td className="px-6 py-5">{item.size}</td>

        <td className="px-6 py-5">{item.type}</td>

        <td className="px-7 py-5">
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
        colSpan={5}
        className="py-10 text-center text-slate-500"
      >
        No files or folders found.
      </td>
    </tr>
  )}
</tbody>
              </table>
            </div>

            <div className="border-t border-slate-200 px-7 py-6">
              <p className="text-sm text-slate-500">
                Showing {filteredItems.length} of {folderItems.length} items
              </p>
            </div>
          </section>
        </section>
      </div>
    </MainLayout>
  );
}
