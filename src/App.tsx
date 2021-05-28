import { Provider } from 'react-redux';
import CounterContainer from './containers/counter';
import './App.css';
import store from './redux/store';
import User from './containers/user';
import Todos from './containers/todos';

// const useIsLoggedIn = () => {
//   const [logged, setLogged] = useState(false);
//   useEffect(() => {
//     const token = storageService.get('token');
//     setLogged(!!token);
//   }, []);
//   return logged;
// }

function App() {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Provider store={store}>
      <div className="App">
        <h4>redux training</h4>
        <CounterContainer />
        <User />
        <Todos />
        <form onSubmit={handleSubmit}>
          <input />
          <input />
          <button type="submit">submit</button>
        </form>
      </div>
    </Provider>
  );
}

export default App;
