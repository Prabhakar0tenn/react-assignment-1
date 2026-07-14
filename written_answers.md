# Prabhakar Lal – React Assignment

### Part A — Warm-up: quick concepts

**1. In your own words: what is a component in React?**
A component is a reusable piece of UI in React. It is usually a JavaScript function that returns JSX.

**2. This JSX is broken: `<div class="card">` — what is wrong, and what is the fix?**
In JSX, we use className instead of class.
Correct version: `<div className="card">`

**3. Props vs state: which one can a component change itself, and which one is read-only?**
State can be changed by the component itself. Props are read-only values passed from a parent component.

**4. What does the empty array do in `useEffect(() => { ... }, [])`?**
The empty array makes the effect run only once when the component first loads.

**5. Why does React need a key prop when you render a list with `.map()`?**
React uses the key to identify each list item. This helps React update the list correctly and prevents warnings.


### Part B — Bug hunt

**BUG 1**

**Buggy line:**
`return <button onClick={handleSave()}>Save</button>;`

**Corrected line:**
`return <button onClick={handleSave}>Save</button>;`

**Reason:**
`handleSave()` calls the function immediately. `handleSave` passes the function to run later when the button is clicked.

**BUG 2**

**Buggy lines:**
```javascript
todos.push('New task');
setTodos(todos);
```

**Corrected line:**
`setTodos([...todos, 'New task']);`

**Reason:**
State should not be mutated directly. `.push()` changes the original array, so React may not re-render.

**BUG 3**

**Buggy line:**
`<li>{skill.name}</li>`

**Corrected line:**
`<li key={skill.id}>{skill.name}</li>`

**Reason:**
Each item rendered with `.map()` needs a unique key prop.


### Part C · Build: “My Mini Profile”

**Deployed Link :** https://react-assignment-1-beige.vercel.app/

**Github Link :** https://github.com/Prabhakar0tenn/react-assignment-1
