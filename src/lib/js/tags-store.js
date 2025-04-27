import { derived, writable } from "svelte/store";

const TAGS = [
    {
        "name": "Italian",
        "description": "Recipes inspired by traditional Italian cuisine, often featuring pasta, cheese, and olive oil."
    },
    {
        "name": "Vegetarian",
        "description": "Dishes that do not include meat or seafood, suitable for a vegetarian diet."
    },
    {
        "name": "Gluten-Free",
        "description": "Recipes made without gluten-containing ingredients, suitable for gluten-sensitive or celiac diets."
    },
    {
        "name": "Quick",
        "description": "Meals that can be prepared in 30 minutes or less, ideal for busy schedules."
    },
    {
        "name": "Spicy",
        "description": "Dishes with a noticeable heat from spices like chili or pepper."
    },
    {
        "name": "Indian",
        "description": "Recipes inspired by Indian cuisine, known for rich spices and bold flavors."
    },
    {
        "name": "Salad",
        "description": "Cold dishes primarily composed of raw or cooked vegetables and often served with dressing."
    },
    {
        "name": "Breakfast",
        "description": "Dishes typically eaten in the morning, often featuring items like eggs, fruit, or baked goods."
    },
    {
        "name": "Vegan",
        "description": "Recipes that contain no animal products, suitable for a vegan diet."
    },
    {
        "name": "Comfort Food",
        "description": "Hearty, satisfying dishes that provide a sense of nostalgia or warmth."
    }
];

export const tagStore = writable(TAGS);