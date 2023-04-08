export type kana = {
  glyph: string;
  pronunciation: string;
  romanji?: string;
  type?: "basic" | "diatrics" | "digraphs";
  example?: string;
  example_translation?: string;
  example_image_path?: string;
};