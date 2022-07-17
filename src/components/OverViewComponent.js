import { useState } from "react";
import FormComponent from "./FormComponent";
const OverView = ({ expense, inCome, addTransaction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className="flex justify-around">
        <p>balance {inCome - expense}</p>
        <button
          onClick={() => setIsShow(!isShow)}
          className="bg-black text-white text-sm pl-2 pr-2 m-1 rounded 
      "
        >
          {isShow ? "CANCLE" : "ADD"}
        </button>
      </div>
      {isShow && (
        <FormComponent setIsShow={setIsShow} addTransaction={addTransaction} />
      )}
      <div className="flex justify-around">
        <div className="flex flex-col  pt-2 pb-2 pl-5 pr-5 border border-solid border-gray-200 rounded">
          Income <span className="font-bold text-green-600">{inCome} $</span>
        </div>
        <div className=" flex flex-col pt-2 pb-2 pl-5 pr-5 border border-solid border-gray-200 rounded">
          Expense <span className="font-bold text-red-700">{expense} $</span>
        </div>
      </div>
    </>
  );
};

export default OverView;
