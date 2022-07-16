const recipeTitle = document.querySelector("title");
const recipeContainer = document.querySelector(".recipe-container");
const url = new URL(window.location.href);
const params = url.searchParams;
const id = params.get("id");

console.log(id);

const singleUrl = "https://goodfoodmood.monikalie.no/wp-json/wc/store/products/" + id;

console.log(singleUrl);

async function fetchRecipe() {

    try {
        const response = await fetch(singleUrl);
        const details = await response.json();

        console.log(details);

        document.querySelector(".loading").innerHTML = "";
        createRecipe(details);
      
    }
    catch(error) {
        recipeContainer.innerHTML = theError("Oh no!");
    }
    
}

fetchRecipe();

function createRecipe(recipe) {
    recipeTitle.innerHTML = `
                            Good Food Mood | ${recipe.name}
                            `; 
    recipeContainer.innerHTML = `
                                <!-- Back to home link -->
                                <div class="link-wrap">
                                    <a class="home" href="../index.html">Recipes</a> <span> / ${recipe.name} </span>
                                </div>
                                <!-- RECIPE DETAILS -->
		                        <article class="card">
                                    <!-- MODAL IMAGE FUNCTION -->
                                    <div class="thumbnail">
                                        <input type="checkbox" id="thumb-trigger">
                                        <!-- Zoom-in button -->
                                        <label class="tt1" for="thumb-trigger"><i class="fas fa-search-plus"></i></label>
                                        <!-- Modal background -->
                                        <div class="modal-overlay">
                                            <div class="modal-wrapper">
                                                <!-- Zoom-out button -->
                                                <label for="thumb-trigger" class="close-btn"><i class="fas fa-times"></i></label>
                                                <!-- Modal image display on zoom-in -->
                                                <img src="${recipe.images[0].src}" alt="${recipe.name}">
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Recipe image default -->
                                    <img id="modalImg" src="${recipe.images[0].src}" alt="${recipe.name}" />
                                    <!-- RECIPE DETAIL CARD -->
                                    <div class="card-content">
                                        <h2>${recipe.name}</h2>
                                        <!-- Recipe info details -->
                                        <span class="food-info">
                                            <div>
                                                <!-- Prep & cooking time -->
                                                <i class="fa fa-clock"></i> ${recipe.prices.price} min.
                                            </div>
                                            <div>
                                                <!-- Calories -->
                                                | <i class="fas fa-fire"></i> ${recipe.prices.regular_price} kcal | 
                                            </div>
                                            <div>
                                                <!-- Amount of serving in the recipe -->
                                                <i class="fas fa-utensils"></i> ${recipe.attributes[1].terms[0].name} serving
                                            </div>
                                        </span>
                                        <!-- RECIPE DESCRIPTION -->
                                        ${recipe.short_description}
                                        <!-- Recipe tags -->
                                        <span class="tags">
                                            <div>
                                                <span class="tag">&#10003; ${recipe.tags[0].name}</span>
                                                <span class="tag">&#10003; ${recipe.tags[1].name}</span>
                                            </div>
                                            <div>
                                                <span class="tag" id="warning">
                                                &#9888; ${recipe.attributes[0].terms[0].name}</span>
                                            </div>
                                        </span>
                                    </div>
                                </article>
                                <!-- INGREDIENTS & INSTRUCTIONS CONTENT -->
                                <article class="recipe-content">
                                    ${recipe.description}
                                </article>
                            `;
                        }
