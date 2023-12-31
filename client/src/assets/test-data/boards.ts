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
            description:
              'Task 1 description description description description description description description description description description description description description',
            dateAdded: 1,
            dateUpdated: 1,
            tags: [
              {
                id: 1,
                name: 'Tag 1',
                description: 'Tag 1 description',
                color: 'red',
              },
              {
                id: 3,
                name: 'Tag 3',
                description: 'Tag 3 description',
                color: 'orange',
              },
              {
                id: 2,
                name: 'Tag 2',
                description:
                  'Tag 2 description description description description description description description description description description description',
                color: 'green',
              },
            ],
          },
          {
            id: 4,
            title: 'Task 4',
            description:
              'Task 4 description description description description description description description description description description description description description description description',
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
          {
            id: 5,
            title: 'Task 5',
            description:
              'Task 5 description description description description description description description description description description description description description description description',
            dateAdded: 5,
            dateUpdated: 5,
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
            description: 'Task 3 description',
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
          {
            id: 6,
            title: 'Task 6',
            description: 'Task 6 description',
            dateAdded: 6,
            dateUpdated: 6,
            tags: [
              {
                id: 6,
                name: 'Tag 6',
                description: 'Tag 6 description',
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
    description:
      'Board 2 description description description description description description',
    lists: [
      {
        id: 2,
        title: 'List 2',
        description: 'List 2 description',
        tasks: [
          {
            id: 2,
            title: 'Task 2',
            description:
              'Task 2 description description description description description description description description description description description description description',
            dateAdded: 2,
            dateUpdated: 2,
            tags: [
              {
                id: 2,
                name: 'Tag 2',
                description:
                  'Tag 2 description description description description description description description description description description description',
                color: 'red',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Board 3',
    description:
      'Board 3 description description description description description',
    lists: [],
  },
];
