import { Provider } from 'react-redux';
import CounterContainer from './containers/counter';
import './App.css';
import store from './redux/store';
import User from './containers/user';
import Todos from './containers/todos';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h4>redux training</h4>
        <CounterContainer />
        <User />
        <Todos />
      </div>
    </Provider>
  );
}

export default App;
