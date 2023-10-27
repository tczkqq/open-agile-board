import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, map } from 'rxjs';

import { IBoard } from '@models/board.model';
import { BOARDS } from '@test-data/boards';

@Injectable({
  providedIn: 'root',
})
export class BoardMngmtService {
  private data = new BehaviorSubject<IBoard[]>(BOARDS);
  private activeBoard = new BehaviorSubject<IBoard>(BOARDS[0]);

  addBoard(board: IBoard): void {
    const currentData = this.data.getValue();
    this.data.next([...currentData, board]);
  }

  removeBoard(board: IBoard): void {
    const currentData = this.data.getValue();
    const newData = currentData.filter((b) => b.id !== board.id);
    this.data.next(newData);
  }

  updateBoard(board: IBoard): void {
    const currentData = this.data.getValue();
    const newData = currentData.map((b) => {
      if (b.id === board.id) {
        return board;
      }
      return b;
    });
    this.data.next(newData);
  }

  getBoards(): Observable<IBoard[]> {
    return this.data.asObservable();
  }

  getBoardById(id: number): Observable<IBoard> {
    return this.data.pipe(map((boards) => boards.find((b) => b.id === id)!));
  }

  getActiveBoard(): Observable<IBoard> {
    return this.activeBoard.asObservable();
  }

  setActiveBoard(board: IBoard): void {
    this.activeBoard.next(board);
  }
}
