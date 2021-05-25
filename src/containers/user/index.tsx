import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { login } from '../../redux/user/actionCreators';

const User: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, errorMessage, token } = useSelector(
    (state: RootState) => state.user,
  );
  const handleLogin = useCallback(() => {
    dispatch(login());
  }, [dispatch]);
  return (
    <div>
      <p>Loading: {JSON.stringify(loading)}</p>
      <p>Error Message: {JSON.stringify(errorMessage)}</p>
      <p>Token: {JSON.stringify(token)}</p>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default User;
