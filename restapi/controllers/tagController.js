'use strict';

var mongoose = require('mongoose');

var Tag = mongoose.model('Tags');

var Log = mongoose.model('Logs');

exports.tags = function(req, res) {
  Tag.find({}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.add = function(req, res) {
  var new_tag = new Tag(req.body);
  new_tag.save(function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.gettag = function(req, res) {
  Tag.findById(mongoose.Types.ObjectId(req.query.tagId), function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.update = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query.tagId);
  Tag.findOneAndUpdate({_id: id}, req.body, {new: true}, function(err, tag) {
    if (err)
      res.send(err);
    res.json(tag);
  });
};

exports.delete = function(req, res) {
  var id = mongoose.Types.ObjectId(req.query.tagId);
  Tag.remove({
    _id: id
  }, function(err, tag) {
    if (err)
      res.send(err);
    res.json({ message: 'Tag deleted successfully' });
  });
};


//////for logs

    
exports.logs = function(req, res) {
  Log.find({}, function(err, log) {
    if (err)
      res.send(err);
    res.json(log);
  });
};

exports.add_log = function(req, res) {
  var new_log = new Log(req.body);
  new_log.save(function(err, log) {
    if (err)
      res.send(err);
    res.json(log);
  });
};

exports.getlog = function(req, res) {
  Log.findById(mongoose.Types.ObjectId(req.query.logId), function(err, log) {
    if (err)
      res.send(err);
    res.json(log);
  });
};

exports.update_log = function(req, res) {
  var log_id = mongoose.Types.ObjectId(req.query.logId);
  Log.findOneAndUpdate({_id: log_id}, req.body, {new: true}, function(err, log) {
    if (err)
      res.send(err);
    res.json(log);
  });
};

exports.delete_log = function(req, res) {
  var log_id = mongoose.Types.ObjectId(req.query.logId);
  Log.remove({
    _id: log_id
  }, function(err, log) {
    if (err)
      res.send(err);
    res.json({ message: 'Tag deleted successfully' });
  });
};
