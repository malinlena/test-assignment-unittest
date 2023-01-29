/**
 * @jest-environment jsdom
*/

import * as main from '../ts/main';
import * as func from '../ts/functions';
import { Todo } from '../ts/models/Todo';

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
  console.log(button);
  button.click();
  expect(spy).toHaveBeenCalled();
})

test('Should create new todo', () => {
  document.body.innerHTML = `<form id="newTodoForm">
  <input type="text" id="newTodoText" />
  <input type="submit" value="Lägg till" />
</form>`;
  const todos: Todo[] = [{ text: 'Köp mjölk', done: true }, {text: 'Drick mjölk', done: true}];
  const spy = jest.spyOn(main, "createNewTodo").mockReturnValue();
  main.init();
  const form = document.getElementById('newTodoForm') as HTMLFormElement;
  const input = document.getElementById('newTodoText') as HTMLInputElement;
  input.value = 'Köp mjölk';
  form.dispatchEvent(new Event('submit'));
  expect(spy).toHaveBeenCalled();
})