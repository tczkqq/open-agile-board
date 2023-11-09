import { IList } from './list.model';

export interface IBoard {
  id: number;
  title: string;
  description: string;
  lists: IList[];
}
