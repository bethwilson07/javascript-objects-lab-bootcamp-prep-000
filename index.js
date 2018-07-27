var recipes = {ingredient: 'amount'}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  recipes[key] = value;
  return recipes;
}

var newRecipes = Object.assign({},recipes);
newRecipes;

function deleteFromObjectByKey(object, key) {
  delete newRecipes.key;
  return newRecipes;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return recipes;
}