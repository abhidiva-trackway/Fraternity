export interface CateringItem {
  id: string;
  name: string;
  description: string;
  category: string;
}

export interface CateringMenu {
  date: string; // e.g. "2025-10-05"
  event: string; // e.g. "Dinner Buffet"
  menu: Record<string, string[]>; // e.g. { "Welcome Drink": ["Mango Shake", "Coconut Water"] }
  weddingName: string; // e.g. "Smith-Johnson Wedding"
}


