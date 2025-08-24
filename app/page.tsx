// app/page.tsx
import Catalog from "./components/Catalog";
import { formulas } from "./lib/data";

export default function Home() {
  // `formulas` might be an array (static) or a function (runtime loader)
  const data = Array.isArray(formulas) ? formulas : (formulas as any)();

  return <Catalog formulas={data} />;
}
