import { useState } from "react";
const FormComponent = ({ addTransaction, setIsShow }) => {
  const [FormData, setFormData] = useState({
    type: "Expense",
    amount: 0,
    description: "",
  });

  const onchangeHandler = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    addTransaction(FormData);
    setIsShow(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Expense description"
        className="border mt-2 border-solid border-gray-200 rounded"
        type="text"
        name="description"
        onChange={onchangeHandler}
        value={FormData.description}
      />
      <input
        type="number"
        name="amount"
        onChange={onchangeHandler}
        value={FormData.amount}
        className="border m-1 border-solid border-gray-200 rounded"
      />
      <div className="flex justify-center">
        <input
          className="accent-black mr-1"
          type="radio"
          value="Expense"
          name="type"
          onChange={onchangeHandler}
          checked={FormData.type === "Expense"}
        />
        <lable className="mr-2">Expense</lable>
        <input
          className="accent-black mr-1 "
          type="radio"
          value="Income"
          name="type"
          checked={FormData.type === "Income"}
          onChange={onchangeHandler}
        />
        <lable>Income</lable>
      </div>
      <button
        className="bg-black text-white text-sm pl-2 pr-2 m-2 rounded 
      "
        type="submit"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default FormComponent;
