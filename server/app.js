const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')

const app = (message) => {
  const listParams = message.split('-|-')

  switch (listParams[0]) {
    case 'listCategories':
      const categories = JSON.stringify(CategoryService.listCategories())
      return `listAndChooseCategories-|-${categories}`
    case 'chosenCategory':
      const category = listParams[1]
      const products = JSON.stringify(ProductService.getProductsByCategory(category))
      return`listAndChooseProduct-|-${products}`
    default:
      return "ERROR-|-Comando não reconhecido\n"
  }
}

module.exports = app