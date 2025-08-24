import { findById } from "../../lib/data";

export default function FormulaPage({ params }: { params: { id: string }}) {
  const item = findById(params.id);
  if (!item) return <main style={{padding:24}}>Not found</main>;
  return (
    <main style={{maxWidth:800, margin:'0 auto', padding:24}}>
      <div style={{fontSize:12, opacity:.7}}>{item.category}{item.subcategory ? ` • ${item.subcategory}` : ""}</div>
      <h1 style={{fontSize:24, fontWeight:700, marginTop:8}}>{item.title}</h1>
      <pre style={{marginTop:16, padding:16, borderRadius:12, background:'#f3f4f6', whiteSpace:'pre-wrap'}}>{item.formula_raw}</pre>
    </main>
  );
}
