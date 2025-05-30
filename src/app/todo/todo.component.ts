import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  addTodo,
  toggleTodo,
  removeTodo,
  editTodo,
} from '../../store/todo.actions';
import { Todo } from '../../store/todo.reducer';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-todo',
  imports: [CommonModule, ReactiveFormsModule, LucideAngularModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  todoInput = new FormControl('');
  todos$: Observable<Todo[]>;
  editIndex: number | null = null;
  editInput = new FormControl('');

  constructor(private store: Store<{ todos: Todo[] }>) {
    this.todos$ = this.store.pipe(select('todos'));
  }

  //Add elements to our TODO list
  add() {
    const value = this.todoInput.value?.trim();
    if (value) {
      this.store.dispatch(addTodo({ text: value }));
      this.todoInput.reset();
    }
  }

  //update the status
  toggle(index: number) {
    this.store.dispatch(toggleTodo({ index }));
  }

  //Remove the elements form the TODO list
  remove(index: number) {
    this.store.dispatch(removeTodo({ index }));
  }

  //Start editing the entry of the TODO list
  startEdit(index: number, currentText: string) {
    this.editIndex = index;
    this.editInput.setValue(currentText);
  }

  //Save the entry
  saveEdit(index: number) {
    const newText = this.editInput.value?.trim();
    if (newText) {
      this.store.dispatch(editTodo({ index, text: newText }));
      this.editIndex = null;
    }
  }

  // Cancel edition
  cancelEdit() {
    this.editIndex = null;
  }
}
