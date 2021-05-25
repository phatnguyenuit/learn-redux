export interface CounterProps {
  value: number;
  increase: () => void;
  decrease: () => void;
}

const Counter: React.FC<CounterProps> = ({ value, increase, decrease }) => {
  return (
    <div>
      <button onClick={decrease}>Minus</button>
      <span>{value}</span>
      <button onClick={increase}>Plus</button>
    </div>
  );
};

export default Counter;
