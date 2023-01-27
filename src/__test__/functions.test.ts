import { changeTodo, removeAllTodos } from '../ts/functions';

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
