# SpendWise - Interactive Personal Finance Application Framework

SpendWise is an operational personal budgeting tool configured to process multiple financial asset logs. It translates transaction data objects dynamically into visual elements via programmatic client interactions.

## What Improvements Were Made to SpendWise This Week
* Dynamic Event Binding Architecture: Replaced blocking window dialog strings (`prompt()`) with standard interactive buttons and inline input forms.
* Continuous Reactive Framework: Designed the calculations to pipeline modifications out instantly onto the layout without console execution dependency.
* Component Instantiation Injections: Programmed functional loops to construct tracking elements directly within the active DOM viewport layout.

## How Conditionals Are Used in the Project
Conditional statements process verification barriers and toggle dynamic visual themes inside `script.js`:
* Validation Barriers: Blocks bad user submission forms immediately (`isNaN` filters) before logic pipelines compile runtime failures.
* Multi-Tier Status Evaluation: Employs an `if / else if / else` logical profile inside `updateDashboardUI()` that switches container class styles (`status-danger`, `status-warn`, `status-ok`) according to precise financial reserves (e.g., triggering a warning if user funds drop below a 20% margin threshold).

## How Arrays Are Used to Store Data
* `expensesList` Database Simulation: Stores composite key-value mappings representing transactional structures (`description`, `amount`) dynamically appended through native push arrays safely.
* This architecture serves as an evaluation database used by calculation loops and rendering layers to keep data organized cleanly.

## How the DOM Is Updated
The app interfaces cleanly with elements by parsing operational indicators via `document.getElementById()` selectors:
* Node Modifications: Adjusts currency values seamlessly using `.textContent`.
* Component Structuring: Dynamically engineers new ledger item strings programmatically via `document.createElement("li")` blocks.
* Visual State Transitions: Overwrites structural alert container visual modes seamlessly via `.className` updates.

## How User Interactions Are Handled Through Events
User processing states listen directly for interface interactions through `.addEventListener()` tracking hooks:
* `click` Triggers: Linked tightly onto execution buttons to intercept submissions, format numerical data primitives, process computations, and reset elements cleanly for seamless reuse.

## Challenges Encountered & Resolutions
* Challenge: Dynamic item rendering loops would append cumulative history trails repeatedly, creating duplicate layouts on the screen each time a transaction was added.
* Resolution: Solved by injecting `expenseListContainer.innerHTML = ""` directly at the initialization of the rendering function. This wipes out stale layout artifacts completely before the array mapping loops begin reconstruction.
