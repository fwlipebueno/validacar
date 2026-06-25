import type { Feature, MultiPolygon, Polygon } from 'geojson';

export type View = 'home' | 'summary' | 'map' | 'checklist' | 'report';

export type Severity = 'Alta' | 'Média' | 'Baixa';

export interface AlertItem {
  id: number;
  title: string;
  severity: Severity;
  summary: string;
  explanation: string;
  action: string;
  color: 'red' | 'orange' | 'blue' | 'green';
  position: [number, number];
}

export interface ChecklistItem {
  id: string;
  label: string;
  status: 'pending' | 'done';
}

export interface ReportData {
  status: string;
  priority: Severity;
  recommendation: string;
  shareSummary: string;
  nextSteps: string[];
}

export interface RuralProperty {
  propertyName: string;
  owner: string;
  responsible: string;
  carCode: string;
  municipality: string;
  state: string;
  coordinates: string;
  sicarStatus: string;
  analysisCondition: string;
  canRectify: boolean;
  rectificationMessage: string;
  declaredAreaHa: number;
  calculatedAreaHa: number;
  polygon: Feature<Polygon | MultiPolygon>;
  overlap: Feature<Polygon | MultiPolygon>;
  restrictedArea: Feature<Polygon | MultiPolygon>;
  alerts: AlertItem[];
  checklist: ChecklistItem[];
  report: ReportData;
}
