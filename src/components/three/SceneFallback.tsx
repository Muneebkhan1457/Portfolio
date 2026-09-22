export default function SceneFallback() {
  return (
    <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-ink via-ink to-ink/90 overflow-hidden">
      {/* Static gradient placeholder - can be replaced with exported image of 3D scene */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-paper/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-paper/5 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
