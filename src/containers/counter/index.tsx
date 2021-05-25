import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increaseWithPayload,
  increase as increaseActionCreator,
  decrease as decreaseActionCreator,
} from '../../redux/counter/actionCreators';
import { RootState } from '../../redux/rootReducer';

// interface CounterProps {
//   value: number;
//   increase: () => void;
//   decrease: () => void;
//   increaseWithPayload: (payload: number) => () => any;
// }

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);
  const increase = useCallback(
    () => dispatch(increaseActionCreator()),
    [dispatch],
  );
  const decrease = useCallback(
    () => dispatch(decreaseActionCreator()),
    [dispatch],
  );

  const increasePayload = useCallback(
    (payload: number) => () => dispatch(increaseWithPayload(payload)),
    [dispatch],
  );

  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={increase}>Plus</button>
      <button onClick={decrease}>Minus</button>
      <button onClick={increasePayload(2)}>increaseWithPayload</button>
    </div>
  );
};

// const mapStateProps = (state: RootState) => {
//   return {
//     value: state.counter.count,
//   };
// };

// const mapDispatchToProps = (dispatch: Dispatch) => {
//   return {
//     increase: bindActionCreators(increaseActionCreator, dispatch), // (args) => dispatch(increaseActionCreator(args))
//     decrease: bindActionCreators(decreaseActionCreator, dispatch),
//     increaseWithPayload: (payload: number) => () =>
//       bindActionCreators(increaseWithPayload, dispatch)(payload),
//   };
// };

// // (mapStateToProps, mapDispatchToProps?) => (MyComponent) => ConnectedComponent
// export default connect(mapStateProps, mapDispatchToProps)(Counter);

export default Counter;
