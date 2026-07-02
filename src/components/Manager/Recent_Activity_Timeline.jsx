import {
  Upload,
  Share2,
  Trash2,
} from "lucide-react";

const activities = [
  {
    icon: Upload,
    text: "Uploaded Budget Report.pdf",
    time: "5 min ago",
  },
  {
    icon: Share2,
    text: "Shared HR Policy.docx",
    time: "1 hour ago",
  },
  {
    icon: Trash2,
    text: "Deleted old_invoice.pdf",
    time: "Yesterday",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-5">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                <Icon size={18} />
              </div>

              <div>
                <p className="font-medium">
                  {item.text}
                </p>

                <p className="text-sm text-slate-500">
                  {item.time}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}