const TransAction = ({ transAction }) => {
  return (
    <section>
      {transAction.length &&
        transAction.map((t) => (
          <div
            key={t.id}
            className={`bg-gray-200 border-r-4 border-solid m-2 p-2 rounded-lg flex justify-between ${
              t.type === "Expense" ? "border-red-600" : "border-green-600"
            }`}
          >
            <span>{t.description}</span>
            <span>{t.amount} $</span>
          </div>
        ))}
    </section>
  );
};

export default TransAction;
