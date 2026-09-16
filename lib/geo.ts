export const CITY_POINTS: Record<string, { lat: number; lng: number; label: string }> = {
  "37902": { lat: 35.9647, lng: -83.9182, label: "Knoxville, TN" },
  "37920": { lat: 35.89, lng: -83.95, label: "Knoxville, TN" },
  "37862": { lat: 35.8681, lng: -83.5619, label: "Sevierville, TN" },
  "37738": { lat: 35.7143, lng: -83.5102, label: "Gatlinburg, TN" },
  "37876": { lat: 35.93, lng: -83.48, label: "Sevierville, TN" },
  "37801": { lat: 35.687, lng: -83.984, label: "Maryville, TN" },
  "37203": { lat: 36.152, lng: -86.79, label: "Nashville, TN" },
  "37402": { lat: 35.0456, lng: -85.3097, label: "Chattanooga, TN" },
};

export function lookupPoint(postalCode?: string, city?: string) {
  const zip = String(postalCode ?? "").replace(/\D/g, "").slice(0, 5);
  if (zip && CITY_POINTS[zip]) return CITY_POINTS[zip];
  const cityKey = String(city ?? "").trim().toLowerCase();
  if (!cityKey) return null;
  return Object.values(CITY_POINTS).find((p) => p.label.toLowerCase().startsWith(cityKey)) ?? null;
}

export function locationLabel(input: { neighborhood?: string; city?: string; region?: string; postalCode?: string }) {
  return [input.neighborhood, input.city, input.region, input.postalCode].filter(Boolean).join(", ") || "Local pickup";
}
