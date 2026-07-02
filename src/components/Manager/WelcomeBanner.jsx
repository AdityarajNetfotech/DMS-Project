export default function WelcomeBanner() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-white">
      <div className="relative z-10">
        <h2 className="text-3xl font-bold">
          Welcome back, Aditya 👋
        </h2>

        <p className="mt-2 text-blue-100">
          You have 12 pending approvals and 24 new documents uploaded today.
        </p>

        <button className="mt-5 rounded-xl bg-white px-5 py-3 font-medium text-blue-700">
          View Reports
        </button>
      </div>

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10" />
      <div className="absolute -bottom-8 right-20 h-32 w-32 rounded-full bg-white/10" />
    </div>
  );
}