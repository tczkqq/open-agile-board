import { ITag } from './tag.model';

export interface ICard {
  id: number;
  title: string;
  description: string;
  dateAdded: number;
  dateUpdated: number;
  tags: ITag[];
}
