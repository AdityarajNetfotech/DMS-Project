const members = [
  {
    name: "Sarah",
    role: "Admin",
  },
  {
    name: "John",
    role: "Manager",
  },
  {
    name: "Emma",
    role: "Reviewer",
  },
];

export default function TeamMembers() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-5">
        Team Members
      </h2>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {member.name[0]}
              </div>

              <div>
                <h4 className="font-medium">
                  {member.name}
                </h4>

                <p className="text-sm text-slate-500">
                  {member.role}
                </p>
              </div>
            </div>

            <span className="w-2 h-2 rounded-full bg-green-500"></span>
          </div>
        ))}
      </div>
    </div>
  );
}