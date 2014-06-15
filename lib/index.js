var _ = require('lodash');

module.exports = function() {
  this.hook('beforeFind[byPrimaryKey]', function(repository, options) {
    if(!_.isObject(options.criteria)) {
      var value = options.criteria;
      var field = repository._model._primaryKeyColumns[0];
      options.criteria = {
        where: {}
      }
      options.criteria.where[field] = value
    }
  });
};
