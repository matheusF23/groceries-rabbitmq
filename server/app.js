const CategoryService = require('./services/CategoryService')
const ProductService = require('./services/ProductService')
const OrderService = require('./services/OrderService')

const app = (message) => {
  const listParams = message.split('-|-')

  switch (listParams[0]) {
    case 'listCategories':
      const categories = JSON.stringify(CategoryService.listCategories())
      return `listAndChooseCategories-|-${categories}`
    case 'chosenCategory':
      const category = listParams[1]
      const products = JSON.stringify(ProductService.getProductsByCategory(category))
      return `listAndChooseProduct-|-${products}`
    case 'chosenProduct':
      const { productId, productQuantity } = JSON.parse(listParams[1])
      OrderService.addProduct(productId, productQuantity)
      return 'addAnotherProduct'
    default:
      return "ERROR-|-Comando não reconhecido\n"
  }
}

module.exports = app