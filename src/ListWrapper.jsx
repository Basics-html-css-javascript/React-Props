import List from "./List";

function ListWrapper() {
  const hobbies = ["Reading", "Coding", "Gaming"];
  return <List title={<h2>My Hobbies</h2>} items={hobbies} />;
}

export default ListWrapper;
