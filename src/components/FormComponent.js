import { useState } from "react";
const FormComponent = ({ addTransaction }) => {
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
  };
  return (
    <form onSubmit={submitHandler}>
      <input
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
      />
      <div>
        <input
          type="radio"
          value="Expense"
          name="type"
          onChange={onchangeHandler}
          checked={FormData.type === "Expense"}
        />
        Expense
        <input
          type="radio"
          value="Income"
          name="type"
          checked={FormData.type === "Income"}
          onChange={onchangeHandler}
        />
        Income
      </div>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default FormComponent;
