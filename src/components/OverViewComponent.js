import { useState } from "react";
import FormComponent from "./FormComponent";
const OverView = ({ expense, inCome, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div>
        <p>balance {inCome - expense}</p>
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? "CANCLE" : "ADD"}
        </button>
      </div>
      {isShow && <FormComponent addTransaction={addTransaction} />}
      <div>
        <div>income: {inCome}</div>
        <div>expense: {expense}</div>
      </div>
    </>
  );
};

export default OverView;
