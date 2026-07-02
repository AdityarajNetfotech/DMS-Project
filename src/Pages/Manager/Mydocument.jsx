// import {
//   ChevronLeft,
//   ChevronRight,
//   ChevronsUpDown,
//   FileSpreadsheet,
//   FileText,
//   Filter,
//   Folder,
//   MoreVertical,
//   Presentation,
//   Search,
//   UploadCloud,
// } from "lucide-react";

// import MainLayout from "../../layout/MainLayout";

// const documents = [
//   {
//     name: "Project Alpha",
//     owner: "Manager",
//     modified: "May 16, 2025 10:30 AM",
//     size: "-",
//     type: "Folder",
//     kind: "folder",
//   },
//   {
//     name: "HR Documents",
//     owner: "Manager",
//     modified: "May 15, 2025 02:15 PM",
//     size: "-",
//     type: "Folder",
//     kind: "folder",
//   },
//   {
//     name: "Project Proposal.pdf",
//     owner: "Manager",
//     modified: "May 16, 2025 10:30 AM",
//     size: "2.4 MB",
//     type: "PDF",
//     kind: "pdf",
//   },
//   {
//     name: "Q2 Financial Report.xlsx",
//     owner: "Manager",
//     modified: "May 15, 2025 09:20 AM",
//     size: "1.8 MB",
//     type: "Excel",
//     kind: "excel",
//   },
//   {
//     name: "Marketing Strategy.pptx",
//     owner: "Manager",
//     modified: "May 14, 2025 04:45 PM",
//     size: "3.1 MB",
//     type: "PowerPoint",
//     kind: "powerpoint",
//   },
//   {
//     name: "Employee Handbook.pdf",
//     owner: "Manager",
//     modified: "May 13, 2025 11:10 AM",
//     size: "2.7 MB",
//     type: "PDF",
//     kind: "pdf",
//   },
//   {
//     name: "Budget Plan.xlsx",
//     owner: "Manager",
//     modified: "May 12, 2025 03:30 PM",
//     size: "1.2 MB",
//     type: "Excel",
//     kind: "excel",
//   },
// ];

// const fileIconClass = {
//   folder: "bg-amber-100 text-amber-500",
//   pdf: "bg-red-100 text-red-600",
//   excel: "bg-emerald-100 text-emerald-600",
//   powerpoint: "bg-orange-100 text-orange-600",
// };

// function DocumentIcon({ kind }) {
//   const className = `flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
//     fileIconClass[kind] || "bg-slate-100 text-slate-500"
//   }`;

//   if (kind === "folder") {
//     return (
//       <div className={className}>
//         <Folder size={22} fill="currentColor" strokeWidth={1.7} />
//       </div>
//     );
//   }

//   if (kind === "excel") {
//     return (
//       <div className={className}>
//         <FileSpreadsheet size={20} />
//       </div>
//     );
//   }

//   if (kind === "powerpoint") {
//     return (
//       <div className={className}>
//         <Presentation size={20} />
//       </div>
//     );
//   }

//   return (
//     <div className={className}>
//       <FileText size={20} />
//     </div>
//   );
// }

// export default function Mydocument() {
//   return (
//     <MainLayout>
//       <div className="space-y-8">
//         <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
//           <div>
//             <h1 className="text-3xl font-bold tracking-normal text-slate-950">
//               My Documents
//             </h1>
//             <p className="mt-3 text-base text-slate-500">
//               Manage and organize your documents.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
//             <label className="relative block sm:w-[300px]">
//               <Search
//                 size={20}
//                 className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
//               />
//               <input
//                 type="search"
//                 placeholder="Search documents..."
//                 className="h-12 w-full rounded-lg border border-slate-200 bg-white pl-12 pr-4 text-sm text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
//               />
//             </label>

//             <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50">
//               <Filter size={18} />
//               Filters
//             </button>

//             <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-800">
//               <UploadCloud size={18} />
//               Upload Document
//             </button>
//           </div>
//         </section>

//         <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[900px] table-fixed text-left">
//               <thead>
//                 <tr className="border-b border-slate-200 text-sm font-semibold text-slate-500">
//                   <th className="w-[28%] px-8 py-5">
//                     <button className="inline-flex items-center gap-2">
//                       Name
//                       <ChevronsUpDown size={16} />
//                     </button>
//                   </th>
//                   <th className="w-[16%] px-6 py-5">Owner</th>
//                   <th className="w-[22%] px-6 py-5">
//                     <button className="inline-flex items-center gap-2">
//                       Last Modified
//                       <ChevronsUpDown size={16} />
//                     </button>
//                   </th>
//                   <th className="w-[9%] px-6 py-5">Size</th>
//                   <th className="w-[13%] px-6 py-5">Type</th>
//                   <th className="w-[12%] px-8 py-5 text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-slate-200">
//                 {documents.map((document) => (
//                   <tr
//                     key={document.name}
//                     className="text-sm font-medium text-slate-900 transition hover:bg-slate-50"
//                   >
//                     <td className="px-8 py-5">
//                       <div className="flex items-center gap-4">
//                         <DocumentIcon kind={document.kind} />
//                         <span className="truncate">{document.name}</span>
//                       </div>
//                     </td>
//                     <td className="px-6 py-5">{document.owner}</td>
//                     <td className="px-6 py-5 text-slate-800">
//                       {document.modified}
//                     </td>
//                     <td className="px-6 py-5">{document.size}</td>
//                     <td className="px-6 py-5">{document.type}</td>
//                     <td className="px-8 py-5">
//                       <div className="flex justify-end">
//                         <button
//                           className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-700 transition hover:bg-slate-100"
//                           aria-label={`Open actions for ${document.name}`}
//                         >
//                           <MoreVertical size={20} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="flex flex-col gap-4 border-t border-slate-200 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
//             <p className="text-sm text-slate-500">
//               Showing 1 to {documents.length} of {documents.length} results
//             </p>

//             <div className="flex items-center gap-3">
//               <button
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-400 transition hover:bg-slate-50"
//                 aria-label="Previous page"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-700 text-sm font-semibold text-white shadow-sm"
//                 aria-label="Current page 1"
//               >
//                 1
//               </button>

//               <button
//                 className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-500 transition hover:bg-slate-50"
//                 aria-label="Next page"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </div>
//           </div>
//         </section>
//       </div>
//     </MainLayout>
//   );
// }


import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsUpDown,
  FileSpreadsheet,
  FileText,
  Filter,
  Folder,
  MoreVertical,
  Presentation,
  Search,
  UploadCloud,
} from "lucide-react";

import MainLayout from "../../layout/MainLayout";

const initialDocuments = [
  {
    id: 1,
    name: "Project Alpha",
    owner: "Manager",
    modified: "May 16, 2025 10:30 AM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
  {
    id: 2,
    name: "HR Documents",
    owner: "Manager",
    modified: "May 15, 2025 02:15 PM",
    size: "-",
    type: "Folder",
    kind: "folder",
  },
  {
    id: 3,
    name: "Project Proposal.pdf",
    owner: "Manager",
    modified: "May 16, 2025 10:30 AM",
    size: "2.4 MB",
    type: "PDF",
    kind: "pdf",
  },
  {
    id: 4,
    name: "Q2 Financial Report.xlsx",
    owner: "Manager",
    modified: "May 15, 2025 09:20 AM",
    size: "1.8 MB",
    type: "Excel",
    kind: "excel",
  },
  {
    id: 5,
    name: "Marketing Strategy.pptx",
    owner: "Manager",
    modified: "May 14, 2025 04:45 PM",
    size: "3.1 MB",
    type: "PowerPoint",
    kind: "powerpoint",
  },
  {
    id: 6,
    name: "Employee Handbook.pdf",
    owner: "Manager",
    modified: "May 13, 2025 11:10 AM",
    size: "2.7 MB",
    type: "PDF",
    kind: "pdf",
  },
  {
    id: 7,
    name: "Budget Plan.xlsx",
    owner: "Manager",
    modified: "May 12, 2025 03:30 PM",
    size: "1.2 MB",
    type: "Excel",
    kind: "excel",
  },
];

const fileColors = {
  folder: "bg-yellow-100 text-yellow-600",
  pdf: "bg-red-100 text-red-600",
  excel: "bg-green-100 text-green-600",
  powerpoint: "bg-orange-100 text-orange-600",
};

function DocumentIcon({ kind }) {
  const className = `flex h-10 w-10 items-center justify-center rounded-lg ${
    fileColors[kind] || "bg-slate-100 text-slate-600"
  }`;

  switch (kind) {
    case "folder":
      return (
        <div className={className}>
          <Folder size={22} fill="currentColor" strokeWidth={1.7} />
        </div>
      );

    case "excel":
      return (
        <div className={className}>
          <FileSpreadsheet size={20} />
        </div>
      );

    case "powerpoint":
      return (
        <div className={className}>
          <Presentation size={20} />
        </div>
      );

    default:
      return (
        <div className={className}>
          <FileText size={20} />
        </div>
      );
  }
}

export default function Mydocument() {
  const [documents, setDocuments] = useState(initialDocuments);
  const [search, setSearch] = useState("");

  const fileInputRef = useRef(null);

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const ext = file.name.split(".").pop().toLowerCase();

    let type = ext.toUpperCase();
    let kind = "pdf";

    if (["xlsx", "xls", "csv"].includes(ext)) {
      type = "Excel";
      kind = "excel";
    } else if (["ppt", "pptx"].includes(ext)) {
      type = "PowerPoint";
      kind = "powerpoint";
    } else if (ext === "pdf") {
      type = "PDF";
      kind = "pdf";
    }

    const newDoc = {
      id: Date.now(),
      name: file.name,
      owner: "You",
      modified: new Date().toLocaleString(),
      size: `${(file.size / (1024 * 1024)).toFixed(2)} MB`,
      type,
      kind,
    };

    setDocuments((prev) => [newDoc, ...prev]);

    e.target.value = "";
  };

  return (
    <MainLayout>
      <div className="space-y-8">

        <section className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">

          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              My Documents
            </h1>

            <p className="mt-2 text-slate-500">
              Manage and organize your documents.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <label className="relative sm:w-80">

              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search documents..."
                className="h-12 w-full rounded-lg border border-slate-300 bg-white pl-11 pr-4 text-sm outline-none focus:border-blue-500"
              />
            </label>

            <button className="flex h-12 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-5 text-sm font-medium hover:bg-slate-50">
              <Filter size={18} />
              Filters
            </button>

            <input
              ref={fileInputRef}
              type="file"
              className="hidden"
              onChange={handleUpload}
            />

            <button
              onClick={() => fileInputRef.current.click()}
              className="flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-700 px-5 text-sm font-semibold text-white hover:bg-blue-800"
            >
              <UploadCloud size={18} />
              Upload Document
            </button>

          </div>

        </section>

        <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

          <div className="overflow-x-auto">

            <table className="min-w-[900px] w-full table-fixed">

              <thead>

                <tr className="border-b border-slate-200 text-left text-sm text-slate-500">

                  <th className="px-8 py-5 w-[30%]">
                    <button className="flex items-center gap-2">
                      Name
                      <ChevronsUpDown size={15} />
                    </button>
                  </th>

                  <th className="px-6 py-5 w-[15%]">
                    Owner
                  </th>

                  <th className="px-6 py-5 w-[22%]">
                    <button className="flex items-center gap-2">
                      Last Modified
                      <ChevronsUpDown size={15} />
                    </button>
                  </th>

                  <th className="px-6 py-5 w-[10%]">
                    Size
                  </th>

                  <th className="px-6 py-5 w-[13%]">
                    Type
                  </th>

                  <th className="px-8 py-5 text-right w-[10%]">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody className="divide-y divide-slate-200">
                {filteredDocuments.length > 0 ? (
                  filteredDocuments.map((document) => (
                    <tr
                      key={document.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-8 py-5">
                        <div className="flex items-center gap-4">
                          <DocumentIcon kind={document.kind} />
                          <span className="truncate font-medium text-slate-900">
                            {document.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-6 py-5 text-slate-700">
                        {document.owner}
                      </td>

                      <td className="px-6 py-5 text-slate-700">
                        {document.modified}
                      </td>

                      <td className="px-6 py-5 text-slate-700">
                        {document.size}
                      </td>

                      <td className="px-6 py-5 text-slate-700">
                        {document.type}
                      </td>

                      <td className="px-8 py-5">
                        <div className="flex justify-end">
                          <button
                            className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100"
                            aria-label="Actions"
                          >
                            <MoreVertical size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={6}
                      className="py-12 text-center text-slate-500"
                    >
                      No documents found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col gap-4 border-t border-slate-200 px-8 py-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-slate-500">
              Showing{" "}
              <span className="font-semibold">
                {filteredDocuments.length}
              </span>{" "}
              of{" "}
              <span className="font-semibold">
                {documents.length}
              </span>{" "}
              documents
            </p>

            <div className="flex items-center gap-3">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-50"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 text-white font-semibold"
              >
                1
              </button>

              <button
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 hover:bg-slate-50"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </section>

      </div>
    </MainLayout>
  );
}