const CategoryService = require('./services/CategoryService')

const app = (message) => {
  const listParams = message.split('-|-')

  switch (listParams[0]) {
    case 'listAndChooseCategories':
      const category = CategoryService.listAndChooseCategories(listParams[1])
      return `chosenCategory-|-${category}`
    case 'ERROR':
      return 'ERROR'
    default:
      return "ERROR-|-Comando não reconhecido\n"
  }
}

module.exports = app
