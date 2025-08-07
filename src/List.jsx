function List({ title, items }) {
  return (
    <div>
      {title}
      <ul>
        {items && items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
