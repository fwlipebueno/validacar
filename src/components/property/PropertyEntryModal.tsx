import { useEffect, useState, type FormEvent } from 'react';
import { IdCard, Landmark, MapPinned, X } from 'lucide-react';

interface PropertyEntryModalProps {
  onClose: () => void;
  onSimulate: () => void;
}

export function PropertyEntryModal({ onClose, onSimulate }: PropertyEntryModalProps) {
  const [carCode, setCarCode] = useState('');
  const [ownerCpf, setOwnerCpf] = useState('');
  const [landReference, setLandReference] = useState('');
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
      setError('Informe um código CAR para iniciar a pré-análise.');
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
          <p>Informe os dados do imóvel para iniciar uma pré-análise orientativa.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="modal-field">
            <label htmlFor="car-code-input">Código CAR</label>
            <input
              id="car-code-input"
              autoFocus
              required
              value={carCode}
              onChange={(event) => setCarCode(event.target.value)}
              placeholder="Ex.: MG-3102303-7B3A..."
            />
          </div>

          <div className="modal-field-grid">
            <div className="modal-field">
              <label htmlFor="owner-cpf-input">CPF do proprietário</label>
              <input
                id="owner-cpf-input"
                value={ownerCpf}
                onChange={(event) => setOwnerCpf(event.target.value)}
                placeholder="Opcional"
              />
              <small>Ajuda a conferir dados cadastrais quando houver autorização.</small>
            </div>

            <div className="modal-field">
              <label htmlFor="land-reference-input">CCIR ou código SIGEF</label>
              <input
                id="land-reference-input"
                value={landReference}
                onChange={(event) => setLandReference(event.target.value)}
                placeholder="Opcional"
              />
              <small>Ajuda a comparar dados fundiários e perímetro certificado.</small>
            </div>
          </div>

          {error && <span className="modal-error">{error}</span>}
          {status && <span className="modal-success">{status}</span>}

          <section className="complementary-validations" aria-labelledby="complementary-validations-title">
            <div className="complementary-validations-header">
              <div>
                <h3 id="complementary-validations-title">Pré-checagem do imóvel</h3>
                <p>Conferências que ajudam a reduzir erro antes da pré-análise.</p>
              </div>
            </div>

            <div className="validation-check-list">
              <div className="validation-check-item">
                <IdCard size={17} />
                <div>
                  <strong>CAR</strong>
                  <small>Identifica o imóvel e orienta a leitura inicial.</small>
                </div>
                <span>Obrigatório</span>
              </div>
              <div className="validation-check-item">
                <IdCard size={17} />
                <div>
                  <strong>Proprietário</strong>
                  <small>Ajuda a evitar inconsistência de CPF e data de nascimento.</small>
                </div>
                <span>Com autorização</span>
              </div>
              <div className="validation-check-item">
                <Landmark size={17} />
                <div>
                  <strong>Propriedade</strong>
                  <small>Apoia conferência de CCIR, INCRA e matrícula.</small>
                </div>
                <span>Opcional</span>
              </div>
              <div className="validation-check-item">
                <MapPinned size={17} />
                <div>
                  <strong>Perímetro</strong>
                  <small>Compara o CAR com perímetro certificado no SIGEF, quando existir.</small>
                </div>
                <span>Recomendado</span>
              </div>
            </div>
          </section>

          <p className="modal-note">
            Pré-análise orientativa. No protótipo, os dados são demonstrativos e não são enviados ao SICAR.
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
