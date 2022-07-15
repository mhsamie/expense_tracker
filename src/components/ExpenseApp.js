import { useState, useEffect } from "react";
import OverView from "./OverViewComponent";
import TransAction from "./transActionComponent";
const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [inCome, setInCome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  const addTransaction = (FormData) => {
    setTransAction([...transAction, { ...FormData, id: Date.now() }]);
  };
  useEffect(() => {
    let expense = 0;
    let income = 0;
    transAction.forEach((t) =>
      t.type === "Income"
        ? (income = income + parseFloat(t.amount))
        : (expense = expense + parseFloat(t.amount))
    );
    setExpense(expense);
    setInCome(income);
  }, [transAction]);
  return (
    <section>
      <OverView
        inCome={inCome}
        expense={expense}
        addTransaction={addTransaction}
      />
      <TransAction transAction={transAction} />
    </section>
  );
};

export default ExpenseApp;
