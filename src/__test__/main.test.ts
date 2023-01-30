/**
 * @jest-environment jsdom
*/

import * as main from '../ts/main';

beforeEach(() => {
	document.body.innerHTML = '';
});

afterEach(() => {
	jest.restoreAllMocks();
});

test('Should clear todos', () => {
  document.body.innerHTML = `<button type="button" id="clearTodos">Rensa lista</button>`;

  const spy = jest.spyOn(main, "clearTodos").mockReturnValue();

  main.init();

  const button = document.getElementById('clearTodos') as HTMLButtonElement;
  button.click();

  expect(spy).toHaveBeenCalled();
})

test('Should create new todo', () => {
  document.body.innerHTML = `
  <form id="newTodoForm">
    <div>
      <input type="text" id="newTodoText" />
      <button>Skapa</button>
      <button type="button" id="clearTodos">Rensa lista</button>
    </div>
    <div id="error" class="error"></div>
  </form>
  `;

  const spy = jest.spyOn(main, "createNewTodo").mockReturnValue();

  main.init();

  const form = document.getElementById('newTodoForm') as HTMLFormElement;
  form.submit();
  
  expect(spy).toHaveBeenCalled();
})

test('Should test toggle todo', () => {
  document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;

  const spy = jest.spyOn(main, 'toggleTodo');

  const todos = [{ text: 'Köp mjölk', done: true }, {text: 'Drick mjölk', done: false }];
  main.createHtml(todos);

  const listElements = document.querySelectorAll('li');
  listElements[0]?.click();
  listElements[1]?.click();

  expect(spy).toHaveBeenCalled();
  expect(todos[0].done).toBeFalsy();
  expect(todos[1].done).toBeTruthy();
}); 

test('Should test displayError', () => {
  document.body.innerHTML = `<div id="error" class="error"></div>`;

  main.displayError('Error', true);

  const errorElement = document.getElementById('error');
  expect(errorElement?.innerHTML).toBe('Error');
});