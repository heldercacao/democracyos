/**
 * Module dependencies.
 */

var express = require('express');
var config = require('lib/config');

/**
 * Exports Application
 */

var app = module.exports = express();

function redirect(req, res, next) {
  var path = req.params.path || '';
  var url = config('settings url') + (path ? '/' + path : '');
  res.redirect(url);
}

if (config('settings url')) {
  app.get('/settings', redirect);
  app.get('/settings/:path', redirect);
};

app.get('/settings', require('lib/layout'));
app.get('/settings/profile', require('lib/layout'));
app.get('/settings/password', require('lib/layout'));
app.get('/settings/notifications', require('lib/layout'));
