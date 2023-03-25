import { ALL_RECIPES, DETAIL_ID } from "../action/actionTypes";

const initialState = {
  recipesAll: [
    {
      id: 782585,
      name: "Cannellini Bean and Asparagus Salad with Mushrooms",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      healthScore: 100,
    },
    {
      id: 2,
      name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
      image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      healthScore: 75,
    },
    {
      id: 3,
      name: "Berry Banana Breakfast Smoothie",
      image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      healthScore: 64,
    },
    {
        id: 4,
        name: "Cannellini Bean and Asparagus Salad with Mushrooms",
        image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 100,
      },
      {
        id: 5,
        name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 75,
      },
      {
        id: 6,
        name: "Berry Banana Breakfast Smoothie",
        image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 64,
      },
      {
        id: 7,
        name: "Cannellini Bean and Asparagus Salad with Mushrooms",
        image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 100,
      },
      {
        id: 8,
        name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
        image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 75,
      },
      {
        id: 9,
        name: "Berry Banana Breakfast Smoothie",
        image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
        diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
        healthScore: 64,
      },
      {
          id: 10,
          name: "Cannellini Bean and Asparagus Salad with Mushrooms",
          image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
          diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
          healthScore: 100,
        },
        {
          id: 11,
          name: "Cauliflower, Brown Rice, and Vegetable Fried Rice",
          image: "https://spoonacular.com/recipeImages/716426-312x231.jpg",
          diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
          healthScore: 75,
        },
        {
          id: 12,
          name: "Berry Banana Breakfast Smoothie",
          image: "https://spoonacular.com/recipeImages/715497-312x231.jpg",
          diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
          healthScore: 64,
        },
  ],
  recipeDetail:null
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_RECIPES:
      return {
        ...state,
        recipesAll: payload,
      };
      case DETAIL_ID:
        return{
          ...state,
          recipeDetail:payload
        }
    default:
      return state;
  }
}

export default rootReducer;
