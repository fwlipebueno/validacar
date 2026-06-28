import { Info } from 'lucide-react';

export function Notice() {
  return (
    <div className="notice">
      <Info size={18} />
      <span>Este diagnóstico é orientativo e não substitui a análise oficial do SICAR.</span>
    </div>
  );
}
