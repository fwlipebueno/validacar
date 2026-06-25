type BadgeTone = 'green' | 'orange' | 'red' | 'blue' | 'gray';

interface BadgeProps {
  children: string;
  tone: BadgeTone;
}

export function Badge({ children, tone }: BadgeProps) {
  return <span className={`badge badge-${tone}`}>{children}</span>;
}
