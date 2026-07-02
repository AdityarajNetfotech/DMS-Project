const notifications = [
  "Finance folder shared with you",
  "New version uploaded for Contract.pdf",
  "Backup completed successfully",
  "Storage usage reached 80%",
];

export default function NotificationPanel() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-semibold">
        Notifications
      </h3>

      <div className="mt-5 space-y-4">
        {notifications.map((item, i) => (
          <div
            key={i}
            className="rounded-xl bg-slate-50 p-3 text-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}