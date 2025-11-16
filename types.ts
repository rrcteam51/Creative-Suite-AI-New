
export type AspectRatio = "1:1" | "16:9" | "9:16" | "4:3" | "3:4";

export type Tab = 'generate' | 'edit' | 'chat';

export interface ImageData {
  base64: string;
  mimeType: string;
}
