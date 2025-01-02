# Redux with React

## Step 1: Set Up's

### Redux Flow
1. **UI** → **Action Dispatch** → **Store** → **Reducer** → **State** → **View**

---

## Core Concepts in Redux

### 1. **Action**:
   - An object that describes what you want to do.
   - Example:
     ```javascript
     const incrementAction = {
       type: 'INCREMENT',
       payload: { value: 1 }
     };
     ```

### 2. **Reducer**:
   - A pure function that takes the current state and an action, and returns the new state.
   - Example:
     ```javascript
     const counterReducer = (state = { count: 0 }, action) => {
       switch (action.type) {
         case 'INCREMENT':
           return { count: state.count + action.payload.value };
         case 'DECREMENT':
           return { count: state.count - action.payload.value };
         default:
           return state;
       }
     };
     ```

### 3. **Store**:
   - Holds the application state and provides methods to dispatch actions and subscribe to changes.
   - Example:
     ```javascript
     import { createStore } from 'redux';
     const store = createStore(counterReducer);
     ```

---

## Step 2: Setting Up Redux in a React App

### Install Required Libraries
```bash
npm install redux react-redux
