export default function Work() {
  const projects = [
    { title: "Agent UI", desc: "Multi-steg agents med logg och export." },
    { title: "Media Clipper", desc: "Klipper YouTube till highlights." },
    { title: "Web Ingestor", desc: "Skrapar & chattar med dokumentation." }
  ]

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <h2 className="text-4xl font-bold mb-10">Projekt</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div key={i} className="p-6 bg-gray-900 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">{proj.title}</h3>
            <p className="text-gray-400">{proj.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
