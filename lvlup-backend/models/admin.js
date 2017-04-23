const Bookshelf = require('../bookshelf');
const LvlModel = require('./lvlModel');

require('./cohort');
require('./admin_cohort');
require('./campus');

const Admin = LvlModel.extend({
  tableName: 'admins',
  hasTimestamps: true,

  cohorts() {
    return this.belongsToMany('Cohort').through('AdminCohort');
  },
  campus() {
    return this.belongsTo('Campus');
  },
});

module.exports = Bookshelf.model('Admin', Admin);
