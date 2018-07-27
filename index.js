var recipes = {ingredient: 'amount'}

function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]:value});
}

