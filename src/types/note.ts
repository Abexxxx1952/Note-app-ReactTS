import { Categories } from "./Categories";
export interface INote {
  id: string;
  name: string;
  creation_time: string;
  category: Categories;
  content: string;
  dates: string;
}
