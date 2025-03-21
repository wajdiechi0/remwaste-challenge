export interface Skip {
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
  area: string | null;
  created_at: string;
  forbidden: boolean;
  hire_period_days: number;
  id: number;
  per_tonne_cost: number | null;
  postcode: string;
  price_before_vat: number;
  size: number;
  transport_cost: number | null;
  updated_at: string;
  vat: number;
}

export interface SkipDisplay {
  id: number;
  size: number;
  pricePerWeek: number;
  isPrivateOnly: boolean;
  hirePeriod: number;
} 