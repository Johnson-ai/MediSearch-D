export default function ResultRenderer({ text }) {
  if (!text) return null;
  return (
    <div className="result-section">
      {text.split("\n").map((line, i) => {
        if (!line.trim()) return <div key={i} className="h-2" />;
        if (line.startsWith("## ")) return (
          <h1 key={i} className="flex items-center gap-2 mt-6 mb-3 first:mt-0">
            <span className="w-0.5 h-5 bg-blue-600 rounded-full flex-shrink-0" />
            {line.replace(/^##\s*/, "")}
          </h1>
        );
        if (line.startsWith("# ")) return <h1 key={i} className="text-blue-200 text-lg font-display font-bold mt-4 mb-2">{line.replace(/^#\s*/, "")}</h1>;
        if (line.startsWith("### ")) return <h2 key={i}>{line.replace(/^###\s*/, "")}</h2>;
        if (line.match(/^\*\*[^*]+\*\*$/) ) return <p key={i} className="font-semibold text-blue-100 mt-3 mb-1 text-sm">{line.replace(/\*\*/g, "")}</p>;
        if (line.startsWith("- ") || line.startsWith("• ")) {
          const html = line.replace(/^[-•]\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          return <li key={i} dangerouslySetInnerHTML={{ __html: html }} />;
        }
        if (/^\d+\./.test(line)) {
          const num = line.match(/^\d+/)?.[0];
          const html = line.replace(/^\d+\.\s*/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
          return (
            <div key={i} className="flex gap-2 my-1">
              <span className="text-blue-700 font-mono text-xs mt-1 flex-shrink-0 w-4">{num}.</span>
              <p className="!mb-0" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          );
        }
        const html = line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/\*(.*?)\*/g, "<em>$1</em>");
        return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
      })}
    </div>
  );
}
