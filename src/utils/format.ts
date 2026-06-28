export function formatArea(value: number) {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

export function formatAreaDifference(calculatedArea: number, declaredArea: number) {
  const difference = calculatedArea - declaredArea;
  return `${difference < 0 ? '-' : '+'}${formatArea(Math.abs(difference))} ha`;
}
