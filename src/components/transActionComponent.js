import { useState, useEffect } from "react";

const TransAction = ({ transAction }) => {
  const [searchItem, setSearchItem] = useState("");
  const [filteredItem, setFilteredItem] = useState(transAction);
  const filterItems = (search) => {
    if (!search) {
      setFilteredItem(transAction);
      return;
    }
    const filteredTransaction = transAction.filter((t) =>
      t.description.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredItem(filteredTransaction);
  };
  const searchHandler = (e) => {
    setSearchItem(e.target.value);
    filterItems(e.target.value);
  };
  useEffect(() => {
    filterItems(searchItem);
  }, [transAction]);
  return (
    <section>
      <input
        placeholder="search the transactions"
        type="text"
        value={searchItem}
        onChange={searchHandler}
        className="border w-60 mt-2 border-solid border-gray-200 rounded bg-gray-100"
      />
      {filteredItem.length
        ? filteredItem.map((t) => (
            <div
              key={t.id}
              className={`bg-gray-200 border-r-4 border-solid m-2 p-2 rounded-lg flex justify-between ${
                t.type === "Expense" ? "border-red-600" : "border-green-600"
              }`}
            >
              <span>{t.description}</span>
              <span>{t.amount} $</span>
            </div>
          ))
        : null}
    </section>
  );
};

export default TransAction;
