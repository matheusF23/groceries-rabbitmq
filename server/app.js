const CategoryService = require('./services/CategoryService')

const app = (message) => {
  const listParams = message.split('-|-')

  switch (listParams[0]) {
    case 'listCategories':
      const categories = JSON.stringify(CategoryService.listCategories())
      return `listAndChooseCategories-|-${categories}`
    default:
      return "ERROR-|-Comando não reconhecido\n"
  }
}

module.exports = app