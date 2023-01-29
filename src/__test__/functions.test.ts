import { addTodo, changeTodo, removeAllTodos } from '../ts/functions';

test('Should change todo', () => {
  const todo = { text: 'Köp mjölk', done: true };
  changeTodo(todo);
  expect(todo.done).toBeFalsy()
});

test('Should remove all todos', () => {
  const todos = [{ text: 'Köp mjölk', done: true }, {text: 'Drick mjölk', done: true}];
  removeAllTodos(todos);
  expect(todos.length).toBe(0);
});

test('Should add todo', () => {
  const todos = [{ text: 'Köp mjölk', done: true }, {text: 'Drick mjölk', done: true}];
  const todoText = 'Köp mjölk';
  const result = addTodo(todoText, todos);
  expect(result.success).toBeTruthy();
  expect(todos.length).toBe(3);
});

test('Should not add todo', () => {
  const todos = [{ text: 'Köp mjölk', done: true }, {text: 'Drick mjölk', done: true}];
  const todoText = 'Kö';
  const result = addTodo(todoText, todos);
  expect(result.success).toBeFalsy();
  expect(todos.length).toBe(2);
});
