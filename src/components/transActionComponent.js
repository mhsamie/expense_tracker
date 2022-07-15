const TransAction = ({ transAction }) => {
  return (
    <section>
      {transAction.map((t) => (
        <div key={t.id}>{t.description}</div>
      ))}
    </section>
  );
};

export default TransAction;
