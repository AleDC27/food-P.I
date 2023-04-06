import { filterRecipes } from "../action/action";
import {
  ALL_RECIPES,
  DETAIL_ID,
  ORDER_RECIPES,
  FILTER_RECIPES,
  SEARCH_RECIPE_NAME,
  CREATE_RECIPE,
  DIETS
} from "../action/actionTypes";

const initialState = {
  recipesAll: [
    {
      healthScore: 100,
      id: 782585,
      name: "Cannellini Bean and Asparagus Salad with Mushrooms",
      image: "https://spoonacular.com/recipeImages/782585-312x231.jpg",
      summary:
        'Cannellini Bean and Asparagus Salad with Mushrooms requires approximately <b>45 minutes</b> from start to finish. This main course has <b>482 calories</b>, <b>31g of protein</b>, and <b>6g of fat</b> per serving. This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe serves 6 and costs <b>$1.35 per serving</b>. 309 people were impressed by this recipe. Head to the store and pick up grain mustard, sea salt, lemon zest, and a few other things to make it today. It is brought to you by foodandspice.blogspot.com. Taking all factors into account, this recipe <b>earns a spoonacular score of 70%</b>, which is pretty good. Similar recipes are <a href="https://spoonacular.com/recipes/cannellini-bean-salad-422994">Cannellini Bean Salad</a>, <a href="https://spoonacular.com/recipes/refreshing-cannellini-bean-salad-113127">Refreshing Cannellini Bean Salad</a>, and <a href="https://spoonacular.com/recipes/cannellini-and-green-bean-salad-33177">Cannellini-and-Green Bean Salad</a>.',
      diets: ["gluten free", "dairy free", "lacto ovo vegetarian", "vegan"],
      dishTypes: [
        "side dish",
        "lunch",
        "main course",
        "salad",
        "main dish",
        "dinner"
      ],
      steps: [
        {
          number: 1,
          step: "Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.",
          ingredients: [
            {
              id: 10716050,
              name: "cannellini beans",
              localizedName: "cannellini beans",
              image: "cooked-cannellini-beans.png",
            },
            {
              id: 14412,
              name: "water",
              localizedName: "water",
              image: "water.png",
            },
          ],
          equipment: [],
          length: {
            number: 480,
            unit: "minutes",
          },
        },
        {
          number: 2,
          step: "Drain and rinse, then transfer to a medium saucepan and cover with fresh water.",
          ingredients: [
            {
              id: 14412,
              name: "water",
              localizedName: "water",
              image: "water.png",
            },
          ],
          equipment: [
            {
              id: 404669,
              name: "sauce pan",
              localizedName: "sauce pan",
              image: "sauce-pan.jpg",
            },
          ],
        },
        {
          number: 3,
          step: "Add the curry leaves or bay leaf and bring to a boil. Reduce heat to medium-low, cover, and simmer for 1 hour or until the beans are tender but not falling apart.",
          ingredients: [
            {
              id: 93604,
              name: "curry leaves",
              localizedName: "curry leaves",
              image: "curry-leaves.jpg",
            },
            {
              id: 2004,
              name: "bay leaves",
              localizedName: "bay leaves",
              image: "bay-leaves.jpg",
            },
            {
              id: 0,
              name: "beans",
              localizedName: "beans",
              image: "kidney-beans.jpg",
            },
          ],
          equipment: [],
          length: {
            number: 60,
            unit: "minutes",
          },
        },
        {
          number: 4,
          step: "Drain and transfer to a large salad bowl.Meanwhile, snap the woody ends off of the asparagus spears and steam the spears for 6 minutes or until just tender but still retaining their crunch.",
          ingredients: [
            {
              id: 11011,
              name: "asparagus",
              localizedName: "asparagus",
              image: "asparagus.png",
            },
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
          length: {
            number: 6,
            unit: "minutes",
          },
        },
        {
          number: 5,
          step: "Transfer to the salad bowl.Now cook the mushrooms.",
          ingredients: [
            {
              id: 11260,
              name: "mushrooms",
              localizedName: "mushrooms",
              image: "mushrooms.png",
            },
          ],
          equipment: [
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
        },
        {
          number: 6,
          step: "Heat the oil in a large skillet over high heat. As soon as the oil is hot, drop in the mushrooms and cook, stirring constantly, for 5 minutes or until the mushrooms begin to brown and lose some of their liquid.",
          ingredients: [
            {
              id: 11260,
              name: "mushrooms",
              localizedName: "mushrooms",
              image: "mushrooms.png",
            },
            {
              id: 4582,
              name: "cooking oil",
              localizedName: "cooking oil",
              image: "vegetable-oil.jpg",
            },
          ],
          equipment: [
            {
              id: 404645,
              name: "frying pan",
              localizedName: "frying pan",
              image: "pan.png",
            },
          ],
          length: {
            number: 5,
            unit: "minutes",
          },
        },
        {
          number: 7,
          step: "Transfer to the bowl with the asparagus.To make the dressing, combine the tarragon, lemon zest, garlic, lemon juice, olive oil and mustard in a small food processor or blender. Process until smooth.",
          ingredients: [
            {
              id: 9152,
              name: "lemon juice",
              localizedName: "lemon juice",
              image: "lemon-juice.jpg",
            },
            {
              id: 9156,
              name: "lemon zest",
              localizedName: "lemon zest",
              image: "zest-lemon.jpg",
            },
            {
              id: 11011,
              name: "asparagus",
              localizedName: "asparagus",
              image: "asparagus.png",
            },
            {
              id: 4053,
              name: "olive oil",
              localizedName: "olive oil",
              image: "olive-oil.jpg",
            },
            {
              id: 2041,
              name: "tarragon",
              localizedName: "tarragon",
              image: "tarragon.jpg",
            },
            {
              id: 2046,
              name: "mustard",
              localizedName: "mustard",
              image: "regular-mustard.jpg",
            },
            {
              id: 11215,
              name: "garlic",
              localizedName: "garlic",
              image: "garlic.png",
            },
          ],
          equipment: [
            {
              id: 404771,
              name: "food processor",
              localizedName: "food processor",
              image: "food-processor.png",
            },
            {
              id: 404726,
              name: "blender",
              localizedName: "blender",
              image: "blender.png",
            },
            {
              id: 404783,
              name: "bowl",
              localizedName: "bowl",
              image: "bowl.jpg",
            },
          ],
        },
        {
          number: 8,
          step: "Pour the dressing over the salad, season with salt and pepper, and toss.",
          ingredients: [
            {
              id: 1102047,
              name: "salt and pepper",
              localizedName: "salt and pepper",
              image: "salt-and-pepper.jpg",
            },
          ],
          equipment: [],
        },
        {
          number: 9,
          step: "Serve at room temperature or chilled.",
          ingredients: [],
          equipment: [],
        },
      ],
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
  recipeDetail: null,
  copyRecipesAll: [],
  filterRecipes: null,
  diets:[]
};

function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ALL_RECIPES:
      return {
        ...state,
        recipesAll: payload,
        copyRecipesAll: payload,
        filterRecipes: payload,
      };
    case DETAIL_ID:
      return {
        ...state,
        recipeDetail: [payload],
      };
    case ORDER_RECIPES:
      let orderCopy = [...state.recipesAll];
      let orderNot = state.filterRecipes;
      let order = (payload) => {
        if (payload === "Default") return orderNot;
        return orderCopy.sort((a, b) => {
          if (payload === "Asendente") return a.id - b.id;
          if (payload === "Desendente") return b.id - a.id;
          if(payload==="A-Z")return a.name.localeCompare(b.name);
          if(payload==="Z-A") return b.name.localeCompare(a.name)
          if(payload==="Max health score") return b.healthScore-a.healthScore;
          if(payload==="Min health score") return a.healthScore-b.healthScore;
        });
      };
      return {
        ...state,
        recipesAll: order(payload),
      };
    case FILTER_RECIPES:
      const filterCopy = [...state.copyRecipesAll];
      const filter = (payload) => {
        if (payload === "All diets") {
          return filterCopy;
        }
        let diets = filterCopy.filter((cur) => cur.diets.includes(payload));
        return diets;
      };
      return {
        ...state,
        recipesAll: filter(payload),
        filterRecipes: filter(payload),
      };

    case SEARCH_RECIPE_NAME:
      console.log(payload.length);
      const result = (payload) => {
        if (payload.length === 0) return state.copyRecipesAll;
        if (payload.length > 0) return payload;
        else console.log("not result");
      };

      return {
        ...state,
        recipesAll: result(payload),
      };
    
    case CREATE_RECIPE:
      console.log("payload",payload)
      return{
        ...state,
        recipesAll:[...state.recipesAll,payload]
      };

    case DIETS:
      const filterDiets=payload.map(cur=>cur.name);
      return {
        ...state,
        diets:filterDiets
      }
    default:
      return state;
  }
}

export default rootReducer;
