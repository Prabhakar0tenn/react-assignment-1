# React for Beginners — Assignment 1

---

### Part A: Warm-up: quick concepts

#### 1. In your own words: what is a component in React?
A component is a reusable block of code that represents a part of the user interface. It combines markup, styles, and logic into one independent unit.

#### 2. This JSX is broken: <div class="card"> — what is wrong, and what is the fix?
In JSX, we cannot use the word "class" because it is a reserved keyword in JavaScript. Instead, React uses "className".
* **Fix:** `<div className="card">`

#### 3. Props vs state: which one can a component change itself, and which one is read-only?
A component can change its own "state" using state setters. However, "props" are read-only because they are passed down from a parent component and should not be modified by the receiving component.

#### 4. What does the empty array do in useEffect(() => { ... }, [])?
The empty array acts as a dependency list. It tells React to run the effect code only once, when the component first mounts onto the screen.

#### 5. Why does React need a key prop when you render a list with .map()?
The key prop helps React identify which items in a list have changed, been added, or been removed. This allows React to update only the modified items instead of re-rendering the entire list, which improves performance.

---

### Part B: Bug hunt

#### BUG 1: The alert fires as soon as the page loads — not when the button is clicked.
* **Bug:** The handler `onClick={handleSave()}` calls the function immediately during rendering because of the parentheses.
* **Fix:** `return <button onClick={handleSave}>Save</button>;`

#### BUG 2: Clicking "Add" updates the array — but the screen never changes.
* **Bug:** The array is mutated directly using `.push()`, and then passed to `setTodos`. Since the reference to the array remains the same, React does not detect any change and does not re-render.
* **Fix:** `setTodos([...todos, 'New task']);`

#### BUG 3: The list renders, but the console shows a warning on every refresh.
* **Bug:** The `<li>` tag inside the map function is missing a unique key.
* **Fix:** `<li key={skill.id}>{skill.name}</li>`
