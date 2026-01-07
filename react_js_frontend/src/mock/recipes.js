const placeholderImg =
  "data:image/svg+xml;charset=utf-8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#2563EB" stop-opacity="0.18"/>
          <stop offset="1" stop-color="#F59E0B" stop-opacity="0.16"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="800" fill="url(#g)"/>
      <text x="60" y="120" font-family="Inter, Arial" font-size="56" fill="#111827" fill-opacity="0.7">Recipe Explorer</text>
      <text x="60" y="190" font-family="Inter, Arial" font-size="26" fill="#111827" fill-opacity="0.55">Mock recipe image</text>
    </svg>`
  );

/**
 * Shape used by the app:
 * {
 *   id, title, description, category, cuisine, diet,
 *   timeMinutes, difficulty, servings,
 *   imageUrl, ingredients[], steps[], tags[]
 * }
 */
// PUBLIC_INTERFACE
export const mockRecipes = [
  {
    id: "lemon-salmon-bowl",
    title: "Lemon Garlic Salmon Bowl",
    description:
      "Flaky salmon with lemon-garlic glaze over a crisp veggie bowl. Bright, fast, and weeknight-friendly.",
    category: "Main",
    cuisine: "American",
    diet: "Pescatarian",
    timeMinutes: 25,
    difficulty: "Easy",
    servings: 2,
    imageUrl: placeholderImg,
    tags: ["High Protein", "Quick", "Fresh"],
    ingredients: [
      "2 salmon fillets",
      "1 tbsp olive oil",
      "2 cloves garlic, minced",
      "1 lemon (zest + juice)",
      "2 cups mixed greens",
      "1 cup cherry tomatoes",
      "1/2 cucumber, sliced",
      "Salt and pepper"
    ],
    steps: [
      "Pat salmon dry and season with salt and pepper.",
      "Sauté garlic in olive oil for 30 seconds. Add lemon zest and juice.",
      "Pan-sear salmon 3–4 minutes per side until cooked through.",
      "Assemble bowl with greens, tomatoes, cucumber, and salmon. Spoon sauce over top."
    ]
  },
  {
    id: "chickpea-curry",
    title: "Cozy Chickpea Curry",
    description:
      "A warming, pantry-friendly curry with chickpeas and spinach. Great for meal prep and leftovers.",
    category: "Main",
    cuisine: "Indian",
    diet: "Vegan",
    timeMinutes: 35,
    difficulty: "Medium",
    servings: 4,
    imageUrl: placeholderImg,
    tags: ["Vegan", "Comfort", "Meal Prep"],
    ingredients: [
      "1 tbsp oil",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "1 tbsp curry powder",
      "1 tsp ground cumin",
      "1 can chickpeas, drained",
      "1 can diced tomatoes",
      "1 cup coconut milk",
      "2 cups spinach",
      "Salt to taste"
    ],
    steps: [
      "Sauté onion until translucent; add garlic and spices.",
      "Stir in chickpeas and tomatoes; simmer 10 minutes.",
      "Add coconut milk; simmer 10 minutes more.",
      "Fold in spinach until wilted. Serve with rice or naan."
    ]
  },
  {
    id: "overnight-oats",
    title: "Blueberry Overnight Oats",
    description:
      "Creamy oats with blueberries and a hint of vanilla. Make ahead for a no-stress morning.",
    category: "Breakfast",
    cuisine: "American",
    diet: "Vegetarian",
    timeMinutes: 10,
    difficulty: "Easy",
    servings: 1,
    imageUrl: placeholderImg,
    tags: ["No Cook", "Make Ahead", "Fiber"],
    ingredients: [
      "1/2 cup rolled oats",
      "1/2 cup milk (or oat milk)",
      "1/3 cup yogurt (optional)",
      "1 tsp maple syrup",
      "1/2 tsp vanilla extract",
      "1/2 cup blueberries",
      "Pinch of salt"
    ],
    steps: [
      "Mix oats, milk, yogurt, maple syrup, vanilla, and salt in a jar.",
      "Fold in blueberries.",
      "Cover and refrigerate overnight (or at least 4 hours).",
      "Top with extra fruit or nuts before eating."
    ]
  },
  {
    id: "avocado-toast",
    title: "Smashed Avocado Toast",
    description:
      "Crispy toast topped with smashed avocado, chili flakes, and a squeeze of lime. Simple and satisfying.",
    category: "Snack",
    cuisine: "Californian",
    diet: "Vegan",
    timeMinutes: 10,
    difficulty: "Easy",
    servings: 1,
    imageUrl: placeholderImg,
    tags: ["Quick", "Minimal", "Fresh"],
    ingredients: [
      "2 slices sourdough bread",
      "1 ripe avocado",
      "1/2 lime",
      "Salt and pepper",
      "Chili flakes (optional)"
    ],
    steps: [
      "Toast bread until crisp.",
      "Smash avocado with lime juice, salt, and pepper.",
      "Spread on toast and finish with chili flakes."
    ]
  },
  {
    id: "chocolate-mousse",
    title: "3-Ingredient Chocolate Mousse",
    description:
      "Silky chocolate mousse with a surprisingly short ingredient list. A crowd-pleasing dessert.",
    category: "Dessert",
    cuisine: "French",
    diet: "Vegetarian",
    timeMinutes: 20,
    difficulty: "Medium",
    servings: 4,
    imageUrl: placeholderImg,
    tags: ["Dessert", "Chocolate", "Elegant"],
    ingredients: [
      "200g dark chocolate",
      "4 eggs, separated",
      "Pinch of salt"
    ],
    steps: [
      "Melt chocolate and let cool slightly.",
      "Whisk egg yolks into chocolate.",
      "Whip egg whites with salt to soft peaks.",
      "Fold whites into chocolate. Chill 2 hours before serving."
    ]
  }
];

// PUBLIC_INTERFACE
export const mockCategories = ["All", "Breakfast", "Main", "Dessert", "Snack"];
