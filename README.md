# Meal Planning Prototype

This prototype is a simple client-side meal planning experience that lets you:

- Browse a pre-filled weekly plan with meals and ingredients for every day.
- Swap between two curated meal options on any day if you change your mind.
- Refresh the entire weekly plan once to load a new set of meals.

## Getting Started

You can run the planner in two ways:

### Option 1 – Open the file directly
1. Locate the `index.html` file in this repository.
2. Double-click it (or open it with your preferred browser) to launch the planner.

### Option 2 – Serve locally (recommended in Codespaces/Codex)
1. Start a local web server from the project root:
   ```bash
   python -m http.server 8000
   ```
2. Open the forwarded URL (or navigate to `http://localhost:8000`) in your browser.
3. The planner will be available at `/index.html`.

## Features

- **Two Choices per Day:** Every day card has a “Change Meal” button to toggle between two available options.
- **Ingredients at a Glance:** Each meal shows its key ingredients so you can quickly build a shopping list.
- **One-Time Refresh:** The “Refresh Weekly Plan” button swaps in a different curated menu. The button disables after a single use to enforce the one-refresh limit.
