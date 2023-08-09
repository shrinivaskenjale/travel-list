export default function Stats({ items }) {
  const itemsCount = items.length;

  if (itemsCount === 0) {
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list. 🚀</em>
      </footer>
    );
  }

  const packedItemsCount = items.reduce(
    (total, item) => (item.packed ? total + 1 : total),
    0
  );
  const packedItemsPercentage = Math.round(
    (packedItemsCount / itemsCount) * 100
  );

  return (
    <footer className="stats">
      <em>
        {packedItemsPercentage !== 100
          ? `💼 You have ${itemsCount} items on your list, and you have already packed ${packedItemsCount} (${packedItemsPercentage}%).`
          : "You got everything! Ready to go. ✈️"}
      </em>
    </footer>
  );
}
