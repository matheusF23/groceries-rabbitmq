const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')

const app = (message) => {
  const listParams = message.split('-|-')

  switch (listParams[0]) {
    case 'listAndChooseCategories':
      const category = CategoryService.listAndChooseCategories(listParams[1])
      return `chosenCategory-|-${category}`
    case 'listAndChooseProduct':
      const userChoice = JSON.stringify(ProductService.listAndChooseProduct(listParams[1]))
      return `chosenProduct-|-${userChoice}`
    case 'ERROR':
      return console.log(listParams[1])
  }
}

module.exports = app
