# TodoListApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

For the Icon was use the lucide icons library

To Run the application just type ng serve

## Features

To add a new TODO item, enter text in the input field and click the Add button.

To toggle the completion status, click on the TODO text. Completed items will appear underlined.

To remove a TODO item, click the button with the X icon.

To edit a TODO item, click the Edit icon. You can then save or cancel the changes. If you edit a completed task, it will automatically be marked as uncompleted.

## Structure

src/
├── app/
│ ├── store/
│ │ ├── todo.actions.ts
│ │ ├── todo.reducer.ts
│ ├── todo/
│ │ ├── todo.component.ts
│ │ ├── todo.component.html
│ │ ├── todo.component.spec.ts
│ │ └── todo.component.css
│ ├── app.component.ts  
│ ├── app.component.html
│ ├── app.config.ts  
├── main.ts
