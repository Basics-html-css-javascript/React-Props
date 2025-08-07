# 🎨 React Props 

 how **props (properties)** help us **pass data** between components in React – from simple to advanced use cases.

---

## 📁 Components Overview

We have three main components in this app:

1. ✅ `Simple` – Passes a single prop
2. 🎯 `Meduim` – Passes multiple props
3. 🧠 `List` – Handles advanced props like arrays and maps over them

---

## 🧩 What Are Props?

> **Props** (short for "properties") are **read-only** data that are passed from a **parent** component to a **child** component in React.

```jsx
<Component propName="value" />
```

🔹 1. Simple Component – Single Prop
```jsx
<Simple name="Alice" />
```
Displays:
Hello, my name is Alice

🔸 2. Meduim Component – Multiple Props
```jsx
<Meduim name="Alice" age={25} course="IT" />
```
Displays:
Name: Alice
Age: 25
Course: IT

🧩 3. List Component – Advanced Props (Array)
```jsx
<List />
```
Inside the component, we define an array of objects and map over them:

```jsx
const students = [
  { name: "John", age: 22 },
  { name: "Jane", age: 24 },
  { name: "Sam", age: 23 },
];
```
Each object is passed as a prop to a child component like this:

```jsx
{students.map((student, index) => (
  <Meduim
    key={index}
    name={student.name}
    age={student.age}
    course="React"
  />
))}
```

💡 How It All Comes Together – App.js

```jsx
import './App.css'
import List from './List'
import Meduim from './Meduim'
import Simple from './Simple'

function App() {
  return (
    <>
      <h1>Single prop</h1>
      <Simple name="Alice" />

      <h1>Multi prop</h1>
      <Meduim name="Alice" age={25} course="IT" />

      <h1>Advance props</h1>
      <List />
    </>
  )
}
export default App
```

🎨 Styling Tip (Optional)
Add some styles to make it colorful!
In App.css:
```css
h1 {
  color: #4e89ae;
  font-family: 'Segoe UI', sans-serif;
  margin-top: 20px;
}

p {
  font-size: 18px;
  color: #333;
}
```

🚀 Conclusion
Props are a core concept in React.
They allow data flow from parent to child and make components dynamic and reusable.


🎨Output
<img width="185" height="296" alt="output" src="https://github.com/user-attachments/assets/d980570d-b01b-4b8b-8bda-7363bc203c5e" />


