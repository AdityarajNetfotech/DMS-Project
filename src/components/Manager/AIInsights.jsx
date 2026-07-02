import { Sparkles } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="rounded-2xl border bg-gradient-to-br from-violet-600 to-indigo-700 p-6 text-white shadow-sm">
      <div className="flex items-center gap-3">
        <Sparkles size={22} />
        <h3 className="text-lg font-semibold">
          AI Insights
        </h3>
      </div>

      <ul className="mt-5 space-y-3 text-sm text-violet-100">
        <li>• 15 duplicate documents detected</li>
        <li>• 8 files missing metadata</li>
        <li>• Storage will reach 90% in 20 days</li>
        <li>• 5 inactive users this month</li>
      </ul>
    </div>
  );
}