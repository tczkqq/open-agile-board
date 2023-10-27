import { ICard } from './card.model';

export interface IList {
  id: number;
  title: string;
  description: string;
  tasks: ICard[];
}
