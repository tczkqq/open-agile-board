import { IBoard } from '@models/board.model';

export const BOARDS: IBoard[] = [
  {
    id: 1,
    title: 'Board 1',
    description: 'Board 1 description',
    lists: [
      {
        id: 1,
        title: 'List 1',
        description: 'List 1 description',
        tasks: [
          {
            id: 1,
            title: 'Task 1',
            descritpion: 'Task 1 description',
            dateAdded: 1,
            dateUpdated: 1,
            tags: [
              {
                id: 1,
                name: 'Tag 1',
                description: 'Tag 1 description',
                color: 'red',
              },
            ],
          },
          {
            id: 4,
            title: 'Task 4',
            descritpion: 'Task 4 description',
            dateAdded: 4,
            dateUpdated: 4,
            tags: [
              {
                id: 1,
                name: 'Tag 1',
                description: 'Tag 1 description',
                color: 'red',
              },
            ],
          },
        ],
      },
      {
        id: 3,
        title: 'List 3',
        description: 'List 3 description',
        tasks: [
          {
            id: 3,
            title: 'Task 3',
            descritpion: 'Task 3 description',
            dateAdded: 3,
            dateUpdated: 3,
            tags: [
              {
                id: 3,
                name: 'Tag 3',
                description: 'Tag 3 description',
                color: 'red',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Board 2',
    description: 'Board 2 description',
    lists: [
      {
        id: 2,
        title: 'List 2',
        description: 'List 2 description',
        tasks: [
          {
            id: 2,
            title: 'Task 2',
            descritpion: 'Task 2 description',
            dateAdded: 2,
            dateUpdated: 2,
            tags: [
              {
                id: 2,
                name: 'Tag 2',
                description: 'Tag 2 description',
                color: 'red',
              },
            ],
          },
        ],
      },
    ],
  },
];
