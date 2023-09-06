function createNode(element){
    return document.createElement(element);
  }

  function append(parent, el){
    return parent.appendChild(el);
  }

  const ol = document.querySelector("#allRecipes");
  const url = "data/data.json";
  fetch(url)
  .then ((resp) => resp.json())
  .then(function(data){
    let recipes = data.recipes;

    return recipes.map(function(recipe){
        let li = createNode("li");
        li.textContent = recipe.recipeTitle + ": " + recipe.recipeCategory;
        append(ol, li);
    })
  })

  .catch(function(error){
    console.log(error);
  })