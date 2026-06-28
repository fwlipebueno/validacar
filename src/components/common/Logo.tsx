import { useId } from 'react';

interface LogoProps {
  onClick?: () => void;
}

export function LogoSymbol() {
  const symbolId = useId().replace(/:/g, '');
  const leafMainId = `leaf-main-${symbolId}`;
  const leafDarkId = `leaf-dark-${symbolId}`;

  return (
    <svg className="logo-symbol" viewBox="0 0 72 64" aria-hidden="true">
      <defs>
        <linearGradient id={leafMainId} x1="10" x2="58" y1="8" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#04944a" />
          <stop offset="1" stopColor="#27b45d" />
        </linearGradient>
        <linearGradient id={leafDarkId} x1="8" x2="42" y1="5" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#047d3f" />
          <stop offset="1" stopColor="#0b9a4b" />
        </linearGradient>
      </defs>
      <path
        d="M18.3 8.6c13.9 3.8 22.5 12.6 25.7 26.3-6.6 4.8-15.2 7.8-25.7 8.9C10.8 33.6 10.8 21.9 18.3 8.6Z"
        fill={`url(#${leafDarkId})`}
      />
      <path
        d="M44.6 28.8c8.7-6.5 17.5-8.2 26.3-5.2.1 12.2-5.6 22.1-17 29.6-8.8-2.6-14.9-7.9-18.2-15.9 2.3-3.3 5.3-6.1 8.9-8.5Z"
        fill={`url(#${leafMainId})`}
        transform="translate(-9 4)"
      />
      <path d="M23 23c8.2 9.2 12.5 19.1 13 29.7" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4.4" />
      <path d="M38.8 45.2c6-8.4 13.2-14.1 21.5-17" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="4.4" />
      <path
        d="M52.8 3.4c1.8 6.2 5.2 9.7 10.2 10.7-5.7 1.6-9.1 5.3-10.2 11.2-1.7-5.7-5.2-9.4-10.4-11.2 5.6-1.4 9.1-4.9 10.4-10.7Z"
        fill="#28b65f"
      />
    </svg>
  );
}

export function Logo({ onClick }: LogoProps) {
  const content = (
    <>
      <LogoSymbol />
      <strong>
        Valida<span>CAR</span>
      </strong>
    </>
  );

  if (onClick) {
    return (
      <button className="logo-mark logo-button" type="button" aria-label="Voltar para a home" onClick={onClick}>
        {content}
      </button>
    );
  }

  return (
    <div className="logo-mark" aria-label="ValidaCAR">
      {content}
    </div>
  );
}
