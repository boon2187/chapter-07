import { DateType } from "./date";

export interface Post {
  id: number;
  title: string;
  thumbnailUrl: string;
  createdAt: DateType;
  categories: string[];
  content: string;
}
