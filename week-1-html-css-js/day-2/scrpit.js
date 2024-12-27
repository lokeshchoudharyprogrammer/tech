
/**
 * Today learning journey 
 * 0. Ninja Code Philosophy
 * 1. comments
 * 2. code documentation
 * 3. code refactoring
 * 4. code optimization
 * 5. code review
 * 6. code debugging
 * 7. code style
 * 8. code quality
 * 9. code best practices
 * 10. code standards
 * 11. code conventions
 * 12. code patterns
 * 13. code smells
 * 14. code complexity
 * 15. code readability
 * 16. code maintainability
 * 17. code reusability
 * 18. code scalability
 * 19. code performance
 * 20. Code quality tools
 * 21. basic of the javascript like variable, data types, operators, loops, functions, objects, arrays, Error handling etc.
 * 22. https://github.com/sudheerj/javascript-interview-questions
 */




/**
 * use always ?? operator  
 */

/**
 * High-level overview of the system's architecture and control flow.
 * Explains how components interact and the overall design.
 */

/**
 * Function to calculate power of a number.
 * 
 * @param {number} x - The base number.
 * @param {number} n - The exponent (must be a natural number).
 * @returns {number} - Result of x raised to the power of n.
 */

/**
 * Explains why this specific solution is chosen over others, especially if it's not the most obvious one.
 * Helps avoid unnecessary rewrites and clarifies design decisions.
 */

/**
 * Highlights subtle or counter-intuitive aspects of the code that might need further clarification.
 * Ensures understanding of tricky parts for future developers.
 */

/**
 * Avoid comments that simply describe what the code does if the code is already self-explanatory.
 * Keep comments focused on the why and context, not the how.
 */



// [ Good comments ]: # best way to write a comment



/**
 * we are going to write a function that takes two parameters and returns the full name of a person.
 * Return the full name of the person.
 * @param {string} firstName - The first name of the person.
 * @param {string} lastName - The last name of the person.
 * @returns {string} - The full name of the person.
 * @example 
 * fullName("John", "Doe"); // "John Doe"
 *  
*/

function fullName(firstName, lastName) {
    return firstName + " " + lastName;
}
let firstName = "John";
let lastName = "Doe";
const result = fullName(firstName, lastName);
console.log(result);


//  [ Ninja Code Philosophy ]: # How to Write Complex and Obscure Code


/**
 * **Ninja Code Philosophy**:
 * - The goal is to make your code minimal, abstract, and complex for future readers to decipher.
 * - Use clever tricks and subtle features to make your code seem elegant and obscure.
 */

/**
 * **Brevity is Key**:
 * Keep code as short as possible, even at the cost of clarity. Use ternary operators for compactness.
 * Example: 
 * i = i ? i < 0 ? Math.max(0, len + i) : i : 0; // Complex but brief
 */

/**
 * **One-Letter Variables**:
 * - Use single-letter variables (e.g., `a`, `b`) to make the code harder to understand.
 * - Avoid using simple counter names like `i` in loops; choose more abstract letters like `x`, `y`.
 */

/**
 * **Abstract Naming**:
 * - Use vague, universal names like `data`, `value`, or `item` to confuse the meaning.
 * - If all else fails, add a number: `data1`, `value2`.
 */

/**
 * **Subtle Variable Naming**:
 * - Use similar or confusing names like `date` vs. `data` to make reading harder.
 * Example: `let date = new Date(); let data = fetchData();`
 */

/**
 * **Synonyms for Similar Functions**:
 * - Use different prefixes (e.g., `displayMessage` vs. `showMessage`) even for similar actions.
 * - This misleads others into thinking there's a subtle difference.
 */

/**
 * **Variable Reuse**:
 * - Reuse variables in functions and reassign them with new values to make the logic harder to follow.
 * Example:
 * function ninjaFunction(elem) {
 *    elem = clone(elem); // Surprise, it's now a clone!
 * }
 */

/**
 * **Underscore Naming**:
 * - Add underscores (`_` or `__`) randomly to make the code look more complicated than it is.
 * Example: `let _value = 10; let __data = 20;`
 */

/**
 * **Overlapping Variables**:
 * - Shadow outer variables inside functions, making debugging harder.
 * Example:
 * let user = authenticateUser();
 * function render() {
 *   let user = anotherValue(); // Confusing, because the outer 'user' is shadowed.
 * }
 */

/**
 * **Side-Effects in Functions**:
 * - Functions like `isReady()` or `checkPermission()` should not modify anything outside. But a ninja adds side effects.
 * Example: `checkPermission() { return { status: 'granted', user: currentUser }; }`
 */

/**
 * **Powerful, Multifunctional Code**:
 * - Combine multiple actions into a single function, making it impossible for others to reuse without understanding the full scope.
 * Example: `function validateEmail(email) { showMessage(); validateFormat(email); return result; }`
 */

/**
 * **Summary**:
 * - Implement these ninja techniques and watch your code become a complex, cryptic masterpiece.
 * - Code will be hard to change or maintain, but that's the ninja way. Prepare future developers for an enlightenment journey.
 */
