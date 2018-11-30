import axios from 'axios';

function Category(api) {
  this.api = api;
}

// TODO should handle errors here
Category.prototype = {
  adminIndex: function(callback) {
    this.api.request('get', '/admin/categories', {}, (resp) => {
      if (typeof callback === 'function') {
        callback(resp);
      }
    });
  },

  index: function(callback) {
    this.api.request('get', '/categories', {}, (resp) => {
      if (typeof callback === 'function') {
        callback(resp);
      }
    });
  },

  create: function(params, callback) {
    this.api.request('post', '/admin/categories', params, (resp) => {
      if (typeof callback === 'function') {
        callback(resp);
      }
    });
  },

  update: function(id, params, callback) {
    this.api.request('post', `/admin/categories/${id}`, params, (resp) => {
      if (typeof callback === 'function') {
        callback(resp);
      }
    });
  },

  show: function(id, callback) {
    this.api.request('get', `/admin/categories/${id}`, {}, (resp) => {
      if (typeof callback === 'function') {
        callback(resp);
      }
    });
  }
}

export default Category;
