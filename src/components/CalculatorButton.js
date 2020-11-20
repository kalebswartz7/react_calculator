import "./CalculatorButton.css";

export const CalculatorButton = (props) => {
  return <button className={props.class}>{props.value}</button>;
};
