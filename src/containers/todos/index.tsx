import { useSelector } from 'react-redux';
import useActions from '../../hooks/useActions';
import { selectTodosState } from '../../selectors/todos';
import { requestTodos } from '../../redux/todos/actionCreators';

const Todos: React.FC = () => {
  const {
    loading,
    errorMessage = '',
    data = [],
  } = useSelector(selectTodosState);

  // map dispatch to action creator
  // const [fn, f2, ...] = useActions(fn1, fn2, ...)
  const [getTodos] = useActions(requestTodos);
  return (
    <div>
      <p>Loading: {JSON.stringify(loading)}</p>
      <p>Error Message: {JSON.stringify(errorMessage)}</p>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={getTodos}>Get todos</button>
    </div>
  );
};

export default Todos;
