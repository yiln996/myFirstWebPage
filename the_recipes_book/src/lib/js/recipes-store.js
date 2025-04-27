import { derived, writable } from "svelte/store";

const RECIPES = [
    {
        "id": 1,
        "name": "Spaghetti Carbonara",
        "ingredients": [1, 2, 3, 4, 5],
        "cookingTime": 25,
        "difficulty": "Easy",
        "tags": ["Italian", "Pasta", "Quick"],
        "image": "carbonara.jpg",
        "steps": [
            "Cook the pasta until al dente.",
            "Fry the pancetta until crispy.",
            "Whisk eggs with grated parmesan.",
            "Combine hot pasta with pancetta and egg mixture.",
            "Serve immediately with extra cheese."
        ]
    },
    {
        "id": 2,
        "name": "Vegetable Stir Fry",
        "ingredients": [6, 7, 8, 9, 10, 11],
        "cookingTime": 20,
        "difficulty": "Medium",
        "tags": ["Asian", "Vegan", "Quick"],
        "image": "stirfry.jpg",
        "steps": [
            "Heat oil in a wok.",
            "Add garlic and ginger, cook briefly.",
            "Add chopped vegetables and stir fry for 5–7 minutes.",
            "Add soy sauce and cook for another 2 minutes.",
            "Serve hot with rice or noodles."
        ]
    },
    {
        "id": 3,
        "name": "Chicken Tikka Masala",
        "ingredients": [12, 13, 14, 15, 16, 17],
        "cookingTime": 45,
        "difficulty": "Hard",
        "tags": ["Indian", "Spicy", "Dinner"],
        "image": "tikka.jpg",
        "steps": [
            "Marinate chicken with yogurt and spices.",
            "Grill or bake chicken until cooked.",
            "Prepare sauce with onion, garlic, tomatoes, and cream.",
            "Add chicken to sauce and simmer for 15 minutes.",
            "Serve with rice or naan."
        ]
    },
    {
        "id": 4,
        "name": "Greek Salad",
        "ingredients": [18, 19, 20, 21, 22, 23],
        "cookingTime": 10,
        "difficulty": "Easy",
        "tags": ["Salad", "Mediterranean", "Vegetarian"],
        "image": "greek-salad.jpg",
        "steps": [
            "Chop tomatoes, cucumber, and red onion.",
            "Add olives and feta cheese to a bowl.",
            "Drizzle with olive oil and sprinkle with oregano.",
            "Toss gently and serve chilled."
        ]
    },
    {
        "id": 5,
        "name": "Banana Pancakes",
        "ingredients": [24, 2, 25, 26, 27],
        "cookingTime": 20,
        "difficulty": "Easy",
        "tags": ["Breakfast", "Sweet", "Vegetarian"],
        "image": "banana-pancakes.jpg",
        "steps": [
            "Mash the banana in a bowl.",
            "Whisk in eggs and milk.",
            "Stir in flour, baking powder, and a pinch of salt.",
            "Cook pancakes on a hot skillet until golden on both sides.",
            "Serve with maple syrup or fruit."
        ]
    },
    {
        "id": 6,
        "name": "Creamy Mushroom Soup",
        "ingredients": [28, 16, 9, 29, 17, 30],
        "cookingTime": 35,
        "difficulty": "Medium",
        "tags": ["Soup", "Comfort Food", "Vegetarian"],
        "image": "creamy-soup.jpg",
        "steps": [
            "Sauté onion and garlic in butter.",
            "Add sliced mushrooms and cook until browned.",
            "Pour in vegetable broth and simmer for 15 minutes.",
            "Blend the soup until smooth.",
            "Stir in cream and season with salt and pepper.",
            "Serve hot with crusty bread."
        ]
    }
]

export const recipeStore = writable(RECIPES);