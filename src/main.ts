import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideStore } from '@ngrx/store';
import { importProvidersFrom } from '@angular/core';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { todoReducer } from './store/todo.reducer';
import { LucideAngularModule, Edit, Trash2, Save, X } from 'lucide-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideStore({ todos: todoReducer }),
    provideStoreDevtools(),
    importProvidersFrom(
      LucideAngularModule.pick({
        Edit,
        Trash2,
        Save,
        X,
      })
    ),
  ],
}).catch((err) => console.error(err));
