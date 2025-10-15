const weekPlans = [
  {
    id: "balanced",
    label: "Balanced Comfort",
    days: [
      {
        name: "Monday",
        options: [
          {
            title: "Lemon Herb Chicken Bowl",
            description: "Grilled chicken with quinoa, roasted carrots, and lemon yogurt drizzle.",
            ingredients: [
              "Chicken breast",
              "Quinoa",
              "Carrots",
              "Baby spinach",
              "Lemon yogurt sauce",
            ],
          },
          {
            title: "Vegetable Stir-Fry",
            description: "Colorful vegetables sautéed in ginger soy glaze served over brown rice.",
            ingredients: [
              "Broccoli",
              "Bell peppers",
              "Snap peas",
              "Brown rice",
              "Ginger soy sauce",
            ],
          },
        ],
      },
      {
        name: "Tuesday",
        options: [
          {
            title: "Turkey Taco Lettuce Wraps",
            description: "Seasoned turkey, corn salsa, and avocado in crisp lettuce cups.",
            ingredients: [
              "Ground turkey",
              "Romaine lettuce",
              "Corn",
              "Tomatoes",
              "Avocado",
            ],
          },
          {
            title: "Mediterranean Chickpea Bowl",
            description: "Chickpeas with cucumber, olives, and feta over herbed couscous.",
            ingredients: [
              "Chickpeas",
              "Cucumber",
              "Kalamata olives",
              "Feta",
              "Couscous",
            ],
          },
        ],
      },
      {
        name: "Wednesday",
        options: [
          {
            title: "Baked Salmon & Greens",
            description: "Honey mustard salmon with roasted Brussels sprouts and farro.",
            ingredients: [
              "Salmon",
              "Brussels sprouts",
              "Farro",
              "Honey mustard glaze",
              "Lemon",
            ],
          },
          {
            title: "Sweet Potato Black Bean Tacos",
            description: "Roasted sweet potatoes, black beans, and lime crema tortillas.",
            ingredients: [
              "Sweet potatoes",
              "Black beans",
              "Whole-wheat tortillas",
              "Lime crema",
              "Cabbage slaw",
            ],
          },
        ],
      },
      {
        name: "Thursday",
        options: [
          {
            title: "Herbed Pork Tenderloin",
            description: "Roasted pork with garlic green beans and mashed cauliflower.",
            ingredients: [
              "Pork tenderloin",
              "Green beans",
              "Cauliflower",
              "Rosemary",
              "Garlic",
            ],
          },
          {
            title: "Miso Ginger Soba Bowl",
            description: "Soba noodles with tofu, bok choy, and miso-ginger broth.",
            ingredients: [
              "Soba noodles",
              "Tofu",
              "Bok choy",
              "Miso paste",
              "Ginger",
            ],
          },
        ],
      },
      {
        name: "Friday",
        options: [
          {
            title: "Shrimp Pesto Pasta",
            description: "Whole-grain linguine tossed in basil pesto with sautéed shrimp.",
            ingredients: [
              "Shrimp",
              "Whole-grain linguine",
              "Basil pesto",
              "Cherry tomatoes",
              "Parmesan",
            ],
          },
          {
            title: "Grilled Halloumi Salad",
            description: "Mixed greens with grilled halloumi, farro, and citrus vinaigrette.",
            ingredients: [
              "Halloumi",
              "Mixed greens",
              "Farro",
              "Oranges",
              "Citrus vinaigrette",
            ],
          },
        ],
      },
      {
        name: "Saturday",
        options: [
          {
            title: "Turkey Meatball Skillet",
            description: "Turkey meatballs simmered in marinara with zucchini ribbons.",
            ingredients: [
              "Turkey meatballs",
              "Marinara sauce",
              "Zucchini",
              "Parmesan",
              "Fresh basil",
            ],
          },
          {
            title: "Thai Peanut Noodle Bowl",
            description: "Rice noodles with shredded chicken, veggies, and peanut sauce.",
            ingredients: [
              "Rice noodles",
              "Shredded chicken",
              "Cabbage",
              "Carrots",
              "Peanut sauce",
            ],
          },
        ],
      },
      {
        name: "Sunday",
        options: [
          {
            title: "Roasted Veggie Frittata",
            description: "Egg frittata with roasted peppers, mushrooms, and goat cheese.",
            ingredients: [
              "Eggs",
              "Bell peppers",
              "Mushrooms",
              "Goat cheese",
              "Herbs",
            ],
          },
          {
            title: "Slow Cooker Beef Barley Soup",
            description: "Hearty beef and barley soup with root vegetables.",
            ingredients: [
              "Beef stew meat",
              "Barley",
              "Carrots",
              "Celery",
              "Beef broth",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "plant-powered",
    label: "Plant-Powered Variety",
    days: [
      {
        name: "Monday",
        options: [
          {
            title: "Tempeh Burrito Bowl",
            description: "Chipotle tempeh with cilantro rice, beans, and pico de gallo.",
            ingredients: [
              "Tempeh",
              "Brown rice",
              "Black beans",
              "Pico de gallo",
              "Chipotle sauce",
            ],
          },
          {
            title: "Creamy Tomato Gnocchi",
            description: "Cauliflower gnocchi simmered in cashew tomato cream sauce.",
            ingredients: [
              "Cauliflower gnocchi",
              "Crushed tomatoes",
              "Cashews",
              "Spinach",
              "Basil",
            ],
          },
        ],
      },
      {
        name: "Tuesday",
        options: [
          {
            title: "Falafel Pita Pockets",
            description: "Baked falafel tucked with cucumber, tomato, and tahini drizzle.",
            ingredients: [
              "Falafel",
              "Pita bread",
              "Cucumber",
              "Tomatoes",
              "Tahini",
            ],
          },
          {
            title: "Curry Lentil Stuffed Peppers",
            description: "Red peppers filled with coconut curry lentils and greens.",
            ingredients: [
              "Red bell peppers",
              "Lentils",
              "Coconut milk",
              "Spinach",
              "Yellow curry paste",
            ],
          },
        ],
      },
      {
        name: "Wednesday",
        options: [
          {
            title: "Mango Avocado Sushi Bowls",
            description: "Sticky rice with nori, mango, avocado, and sesame tofu.",
            ingredients: [
              "Sushi rice",
              "Nori",
              "Mango",
              "Avocado",
              "Sesame tofu",
            ],
          },
          {
            title: "Roasted Cauliflower Tacos",
            description: "Spiced cauliflower with pickled onions and lime crema.",
            ingredients: [
              "Cauliflower",
              "Corn tortillas",
              "Pickled onions",
              "Cabbage",
              "Lime crema",
            ],
          },
        ],
      },
      {
        name: "Thursday",
        options: [
          {
            title: "Butternut Squash Risotto",
            description: "Creamy arborio rice with roasted squash and crispy sage.",
            ingredients: [
              "Arborio rice",
              "Butternut squash",
              "Vegetable broth",
              "Sage",
              "Parmesan (optional)",
            ],
          },
          {
            title: "Vietnamese Rice Noodle Salad",
            description: "Herb-packed noodles with edamame and lime fish sauce dressing.",
            ingredients: [
              "Rice noodles",
              "Edamame",
              "Fresh herbs",
              "Carrots",
              "Nuoc cham dressing",
            ],
          },
        ],
      },
      {
        name: "Friday",
        options: [
          {
            title: "BBQ Jackfruit Sandwich",
            description: "Shredded jackfruit on whole-grain bun with tangy slaw.",
            ingredients: [
              "Jackfruit",
              "BBQ sauce",
              "Whole-grain buns",
              "Purple cabbage",
              "Apple cider vinaigrette",
            ],
          },
          {
            title: "Mediterranean Grain Plate",
            description: "Freekeh with artichokes, sun-dried tomatoes, and hummus.",
            ingredients: [
              "Freekeh",
              "Artichoke hearts",
              "Sun-dried tomatoes",
              "Hummus",
              "Pine nuts",
            ],
          },
        ],
      },
      {
        name: "Saturday",
        options: [
          {
            title: "Spicy Ramen with Greens",
            description: "Vegetable ramen with shiitake, bok choy, and chili oil.",
            ingredients: [
              "Ramen noodles",
              "Shiitake mushrooms",
              "Bok choy",
              "Vegetable broth",
              "Chili oil",
            ],
          },
          {
            title: "Greek Orzo Salad",
            description: "Orzo tossed with roasted chickpeas, cucumbers, and tzatziki.",
            ingredients: [
              "Orzo",
              "Chickpeas",
              "Cucumber",
              "Cherry tomatoes",
              "Tzatziki",
            ],
          },
        ],
      },
      {
        name: "Sunday",
        options: [
          {
            title: "Stuffed Portobello Steaks",
            description: "Portobellos stuffed with quinoa, walnuts, and balsamic glaze.",
            ingredients: [
              "Portobello mushrooms",
              "Quinoa",
              "Walnuts",
              "Spinach",
              "Balsamic glaze",
            ],
          },
          {
            title: "Hearty Vegetable Stew",
            description: "Slow-simmered root veggies, beans, and herbs.",
            ingredients: [
              "Root vegetables",
              "Cannellini beans",
              "Tomato broth",
              "Thyme",
              "Parsley",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "quick-cozy",
    label: "Quick & Cozy",
    days: [
      {
        name: "Monday",
        options: [
          {
            title: "Sheet Pan Sausage & Veggies",
            description: "Italian chicken sausage roasted with potatoes and peppers.",
            ingredients: [
              "Chicken sausage",
              "Baby potatoes",
              "Bell peppers",
              "Red onion",
              "Italian seasoning",
            ],
          },
          {
            title: "Caprese Chicken Sandwich",
            description: "Grilled chicken stacked with mozzarella, tomato, and pesto.",
            ingredients: [
              "Chicken breast",
              "Ciabatta rolls",
              "Fresh mozzarella",
              "Tomatoes",
              "Pesto",
            ],
          },
        ],
      },
      {
        name: "Tuesday",
        options: [
          {
            title: "Pesto Tortellini Salad",
            description: "Cheese tortellini tossed with pesto, peas, and arugula.",
            ingredients: [
              "Cheese tortellini",
              "Pesto",
              "Peas",
              "Arugula",
              "Cherry tomatoes",
            ],
          },
          {
            title: "Garlic Butter Shrimp",
            description: "Quick sautéed shrimp with garlic butter and steamed broccoli.",
            ingredients: [
              "Shrimp",
              "Garlic",
              "Butter",
              "Broccoli",
              "Lemon",
            ],
          },
        ],
      },
      {
        name: "Wednesday",
        options: [
          {
            title: "Chicken Enchilada Skillet",
            description: "Skillet enchiladas with rotisserie chicken and cheddar.",
            ingredients: [
              "Rotisserie chicken",
              "Enchilada sauce",
              "Corn tortillas",
              "Cheddar",
              "Green onions",
            ],
          },
          {
            title: "Spinach Mushroom Quesadillas",
            description: "Crispy quesadillas with sautéed spinach and mushrooms.",
            ingredients: [
              "Spinach",
              "Mushrooms",
              "Whole wheat tortillas",
              "Monterey jack",
              "Salsa",
            ],
          },
        ],
      },
      {
        name: "Thursday",
        options: [
          {
            title: "Teriyaki Beef Bowls",
            description: "Ground beef cooked in teriyaki sauce with rice and edamame.",
            ingredients: [
              "Ground beef",
              "Teriyaki sauce",
              "Rice",
              "Edamame",
              "Green onions",
            ],
          },
          {
            title: "Stuffed Sweet Potatoes",
            description: "Sweet potatoes filled with black beans, corn, and salsa.",
            ingredients: [
              "Sweet potatoes",
              "Black beans",
              "Corn",
              "Salsa",
              "Greek yogurt",
            ],
          },
        ],
      },
      {
        name: "Friday",
        options: [
          {
            title: "Baked Cod Parcels",
            description: "Cod baked in parchment with asparagus and herb butter.",
            ingredients: [
              "Cod fillets",
              "Asparagus",
              "Herb butter",
              "Lemon",
              "Fresh dill",
            ],
          },
          {
            title: "Chicken Caesar Wrap",
            description: "Whole-wheat wrap with grilled chicken, romaine, and parmesan.",
            ingredients: [
              "Grilled chicken",
              "Romaine",
              "Whole-wheat wraps",
              "Parmesan",
              "Caesar dressing",
            ],
          },
        ],
      },
      {
        name: "Saturday",
        options: [
          {
            title: "BBQ Chicken Flatbread",
            description: "Flatbread topped with BBQ chicken, red onion, and cilantro.",
            ingredients: [
              "Flatbread",
              "Shredded chicken",
              "BBQ sauce",
              "Red onion",
              "Cilantro",
            ],
          },
          {
            title: "Veggie Omelette Dinner",
            description: "Three-egg omelette with peppers, spinach, and cheddar.",
            ingredients: [
              "Eggs",
              "Bell peppers",
              "Spinach",
              "Cheddar",
              "Whole grain toast",
            ],
          },
        ],
      },
      {
        name: "Sunday",
        options: [
          {
            title: "One-Pot Pasta Primavera",
            description: "Creamy pasta with seasonal vegetables and parmesan.",
            ingredients: [
              "Pasta",
              "Seasonal vegetables",
              "Vegetable broth",
              "Parmesan",
              "Basil",
            ],
          },
          {
            title: "Homestyle Chicken Soup",
            description: "Comforting soup with noodles, carrots, and celery.",
            ingredients: [
              "Shredded chicken",
              "Egg noodles",
              "Carrots",
              "Celery",
              "Chicken broth",
            ],
          },
        ],
      },
    ],
  },
];

const weekPlanContainer = document.getElementById("week-plan");
const template = document.getElementById("day-card-template");
const refreshButton = document.getElementById("refresh-button");
const refreshHint = document.getElementById("refresh-hint");

let currentPlanIndex = 0;
let daySelections = [];
let refreshesUsed = 0;
const maxRefreshes = 1;

function getCurrentPlan() {
  return weekPlans[currentPlanIndex];
}

function renderWeekPlan() {
  const plan = getCurrentPlan();
  weekPlanContainer.innerHTML = "";
  daySelections = plan.days.map((_, index) => daySelections[index] ?? 0);

  plan.days.forEach((day, dayIndex) => {
    const card = template.content.firstElementChild.cloneNode(true);
    card.dataset.dayIndex = dayIndex;

    card.querySelector(".day-name").textContent = day.name;

    const swapButton = card.querySelector(".swap-button");
    swapButton.addEventListener("click", () => {
      toggleMeal(dayIndex);
    });

    updateDayCard(card, dayIndex);
    weekPlanContainer.appendChild(card);
  });
}

function updateDayCard(card, dayIndex) {
  const plan = getCurrentPlan();
  const optionIndex = daySelections[dayIndex] ?? 0;
  const option = plan.days[dayIndex].options[optionIndex];

  card.querySelector(".meal-title").textContent = option.title;
  card.querySelector(".meal-description").textContent = option.description;

  const ingredientsList = card.querySelector(".ingredients-list");
  ingredientsList.innerHTML = "";
  option.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });
}

function toggleMeal(dayIndex) {
  const plan = getCurrentPlan();
  const availableOptions = plan.days[dayIndex].options.length;
  if (availableOptions <= 1) {
    return;
  }

  daySelections[dayIndex] = (daySelections[dayIndex] + 1) % availableOptions;
  const card = weekPlanContainer.querySelector(
    `.day-card[data-day-index="${dayIndex}"]`
  );
  if (card) {
    updateDayCard(card, dayIndex);
  }
}

function refreshPlan() {
  if (refreshesUsed >= maxRefreshes) {
    return;
  }

  refreshesUsed += 1;
  const nextPlanIndex = (currentPlanIndex + 1) % weekPlans.length;
  currentPlanIndex = nextPlanIndex;
  daySelections = new Array(getCurrentPlan().days.length).fill(0);
  renderWeekPlan();

  if (refreshesUsed >= maxRefreshes) {
    refreshButton.disabled = true;
    refreshHint.textContent = "You have used your refresh. Enjoy the new menu!";
  }
}

refreshButton.addEventListener("click", refreshPlan);

function initializePlanner() {
  daySelections = new Array(getCurrentPlan().days.length).fill(0);
  renderWeekPlan();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePlanner);
} else {
  initializePlanner();
}
