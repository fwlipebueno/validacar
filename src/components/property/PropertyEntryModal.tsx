import { useEffect, useState, type FormEvent } from 'react';
import { X } from 'lucide-react';

interface PropertyEntryModalProps {
  onClose: () => void;
  onSimulate: () => void;
}

export function PropertyEntryModal({ onClose, onSimulate }: PropertyEntryModalProps) {
  const [carCode, setCarCode] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!carCode.trim()) {
      setError('Informe um código CAR para simular a análise.');
      return;
    }

    setError('');
    setStatus('Imóvel carregado para pré-análise demonstrativa.');
    window.setTimeout(onSimulate, 520);
  };

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="property-entry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="property-entry-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button className="modal-close-button" type="button" aria-label="Fechar" onClick={onClose}>
          <X size={20} />
        </button>

        <div>
          <h2 id="property-entry-title">Adicionar imóvel para análise</h2>
          <p>Informe o código CAR para iniciar uma pré-análise orientativa.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <label htmlFor="car-code-input">Código CAR</label>
          <input
            id="car-code-input"
            autoFocus
            value={carCode}
            onChange={(event) => setCarCode(event.target.value)}
            placeholder="Ex.: MG-0000000-0000..."
          />

          {error && <span className="modal-error">{error}</span>}
          {status && <span className="modal-success">{status}</span>}

          <p className="modal-note">
            No MVP, os dados são simulados. O ValidaCAR não cadastra imóveis no SICAR e não substitui análise oficial.
          </p>

          <div className="modal-actions">
            <button className="outline-button" type="button" onClick={onClose}>
              Cancelar
            </button>
            <button className="primary-button" type="submit">
              Iniciar pré-análise
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
