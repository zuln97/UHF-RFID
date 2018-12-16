'use strict';

module.exports = function(app) {

    var tag = require('../controllers/tagController');

    var log = require('../controllers/tagController');

    app.route('/tags')

        .get(tag.tags)

        .post(tag.add);

    app.route('/tags/:tagId')

        .get(tag.gettag)

        .put(tag.update)
        
        .delete(tag.delete);

    app.route('/logs')

        .get(log.logs)

        .post(log.add_log);

    app.route('/logs/:logId')

        .get(log.getlog)

        .put(log.update_log)
        
        .delete(log.delete_log);
};