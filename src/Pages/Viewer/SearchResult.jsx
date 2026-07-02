import Viewer from "../../components/Viewer/Viewer";
import PageHeader from "../../components/Manager/PageHeader";

import {
  Filter,
  Eye,
  Download,
  MoreVertical,
  Search,
  Star,
} from "lucide-react";

export default function SearchPage() {
  const results = [
    {
      name: "Q1 Financial Report.pdf",
      type: "PDF",
      location: "/Finance/Reports/2025",
      modifiedBy: "Sarah Johnson",
      modified: "May 18, 2025",
    },
    {
      name: "Annual Financial Report.xlsx",
      type: "XLSX",
      location: "/Finance/Annual Reports",
      modifiedBy: "Michael Brown",
      modified: "May 16, 2025",
    },
    {
      name: "Financial Summary.docx",
      type: "DOCX",
      location: "/Finance/Reports/2025",
      modifiedBy: "Emma Watson",
      modified: "May 15, 2025",
    },
    {
      name: "Q4 Financial Report.pdf",
      type: "PDF",
      location: "/Finance/Reports/2024",
      modifiedBy: "David Lee",
      modified: "Apr 28, 2025",
    },
  ];

  return (
    <Viewer>
      <div className="space-y-6">
        <PageHeader
          title="Search Results"
          subtitle='Showing results for "financial report"'
        />

        {/* Search Bar */}
        <div className="bg-white rounded-2xl p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                defaultValue="financial report"
                className="w-full h-12 rounded-xl pl-11 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="h-12 px-5 bg-blue-600 text-white rounded-xl">
              Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl p-4 flex flex-wrap gap-3">
          <select className="h-11 px-4 rounded-xl">
            <option>All Types</option>
            <option>PDF</option>
            <option>DOCX</option>
            <option>XLSX</option>
          </select>

          <select className="h-11 px-4  rounded-xl">
            <option>All Folders</option>
          </select>

          <select className="h-11 px-4  rounded-xl">
            <option>Date Modified</option>
          </select>

          <button className="h-11 px-4  rounded-xl flex items-center gap-2">
            <Filter size={16} />
            Filters
          </button>

          <button className="ml-auto text-blue-600 font-medium">
            Clear All
          </button>
        </div>

        {/* Search Results Table */}
        <div className="bg-white rounded-2xl overflow-hidden">
          <div className="p-5">
            <h2 className="font-semibold text-lg">
              Search Results ({results.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px]">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left p-4">Name</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Location</th>
                  <th className="text-left p-4">Modified By</th>
                  <th className="text-left p-4">Last Modified</th>
                  <th className="text-left p-4">Actions</th>
                </tr>
              </thead>

              <tbody>
                {results.map((item, index) => (
                  <tr
                    key={index}
                    className=" hover:bg-gray-50"
                  >
                    <td className="p-4 font-medium">
                      {item.name}
                    </td>

                    <td className="p-4">
                      <span className="px-2 py-1 rounded-lg bg-blue-100 text-blue-700 text-xs">
                        {item.type}
                      </span>
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.location}
                    </td>

                    <td className="p-4">
                      {item.modifiedBy}
                    </td>

                    <td className="p-4 text-gray-600">
                      {item.modified}
                    </td>

                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <button>
                          <Eye size={18} />
                        </button>

                        <button>
                          <Download size={18} />
                        </button>

                        <button>
                          <Star size={18} />
                        </button>

                        <button>
                          <MoreVertical size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t flex justify-end gap-2">
            <button className="w-10 h-10 border rounded-lg">
              1
            </button>

            <button className="w-10 h-10 border rounded-lg">
              2
            </button>

            <button className="w-10 h-10 bg-blue-600 text-white rounded-lg">
              3
            </button>
          </div>
        </div>
      </div>
    </Viewer>
  );
}