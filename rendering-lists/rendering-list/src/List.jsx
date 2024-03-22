function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 95 },
    { id: 2, name: "Banana", calories: 98 },
    { id: 3, name: "Grapes", calories: 80 },
    { id: 4, name: "Mango", calories: 76 },
    { id: 5, name: "Strawberry", calories: 60 },
  ];
  const fruits_list = fruits.map(fruit => <li key={fruit.id}>{fruit.name + " has Calories of " +fruit.calories}</li>);
  return (<ol>{fruits_list}</ol>);
}

export default List;
