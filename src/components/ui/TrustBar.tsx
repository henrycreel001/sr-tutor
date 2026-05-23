import { stats } from "@/lib/data";

export default function TrustBar() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: "#1E3A8A" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#F59E0B" }}>
                {stat.value}
              </p>
              <p className="text-sm font-medium text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
