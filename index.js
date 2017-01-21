if (!window.JST) {
  window.JST = {};
}
window.JST["clear_button"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<button>Clear</button>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

if (!window.JST) {
  window.JST = {};
}
window.JST["edit_form"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<input id="edit_task_content" name="name" type="text"\n  value="');
    
      __out.push(__sanitize(this.content));
    
      __out.push('"\n/>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

if (!window.JST) {
  window.JST = {};
}
window.JST["form"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<input type="text" id=\'task_input\'>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

if (!window.JST) {
  window.JST = {};
}
window.JST["layout"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<div id="task_form"></div>\n<div id="task_list"></div>\n<div id="task_count"></div>\n<div id="clear"></div>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

if (!window.JST) {
  window.JST = {};
}
window.JST["task"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('<input type="checkbox" id="task');
    
      __out.push(__sanitize(this.id));
    
      __out.push('_done"\n');
    
      if (this.done) {
        __out.push('\nchecked="true"\n');
      }
    
      __out.push('\n/>\n<span class="task_content" id="task');
    
      __out.push(__sanitize(this.id));
    
      __out.push('_content">\n\n');
    
      __out.push(__sanitize(this.content));
    
      __out.push('\n\n</span>\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

if (!window.JST) {
  window.JST = {};
}
window.JST["task_count"] = function (__obj) {
  if (!__obj) __obj = {};
  var __out = [], __capture = function(callback) {
    var out = __out, result;
    __out = [];
    callback.call(this);
    result = __out.join('');
    __out = out;
    return __safe(result);
  }, __sanitize = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else if (typeof value !== 'undefined' && value != null) {
      return __escape(value);
    } else {
      return '';
    }
  }, __safe, __objSafe = __obj.safe, __escape = __obj.escape;
  __safe = __obj.safe = function(value) {
    if (value && value.ecoSafe) {
      return value;
    } else {
      if (!(typeof value !== 'undefined' && value != null)) value = '';
      var result = new String(value);
      result.ecoSafe = true;
      return result;
    }
  };
  if (!__escape) {
    __escape = __obj.escape = function(value) {
      return ('' + value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    };
  }
  (function() {
    (function() {
      __out.push('All: ');
    
      __out.push(__sanitize(this.all));
    
      __out.push('\nDone: ');
    
      __out.push(__sanitize(this.done));
    
      __out.push('\nUndone: ');
    
      __out.push(__sanitize(this.undone));
    
      __out.push('\n');
    
    }).call(this);
    
  }).call(__obj);
  __obj.safe = __objSafe, __obj.escape = __escape;
  return __out.join('');
};

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.jQuery = window.$ = require('jquery');

  window._ = require('underscore');

  window.Backbone = require('backbone');

  Backbone.Marionette = require('backbone.marionette');

  window.Store = require('nedb');

  window.BackboNeDB = require('backbone-nedb');

  window.MyApp = {
    Views: {},
    Collections: {},
    Models: {}
  };

  MyApp.Application = (function(superClass) {
    extend(Application, superClass);

    function Application() {
      return Application.__super__.constructor.apply(this, arguments);
    }

    Application.prototype.region = '#main_contents';

    Application.prototype.start = function() {
      var main, model;
      main = this.getRegion();
      model = new MyApp.Models.Hello({
        hello: 'Hello World'
      });
      return main.show(new MyApp.Views.Layout({
        model: model
      }));
    };

    return Application;

  })(Backbone.Marionette.Application);

  $(document).ready(function() {
    var app;
    app = new MyApp.Application;
    return app.start();
  });

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Models.Hello = (function(superClass) {
    extend(Hello, superClass);

    function Hello() {
      return Hello.__super__.constructor.apply(this, arguments);
    }

    return Hello;

  })(Backbone.Model);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Models.Task = (function(superClass) {
    extend(Task, superClass);

    function Task() {
      return Task.__super__.constructor.apply(this, arguments);
    }

    Task.prototype.defaults = {
      done: false
    };

    return Task;

  })(BackboNeDB.Model);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Collections.Tasks = (function(superClass) {
    extend(Tasks, superClass);

    function Tasks() {
      return Tasks.__super__.constructor.apply(this, arguments);
    }

    Tasks.prototype.model = MyApp.Models.Task;

    Tasks.prototype.store = new Store({
      filename: './todo.db',
      autoload: true
    });

    return Tasks;

  })(BackboNeDB.Collection);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.ClearButton = (function(superClass) {
    extend(ClearButton, superClass);

    function ClearButton() {
      return ClearButton.__super__.constructor.apply(this, arguments);
    }

    ClearButton.prototype.template = JST['clear_button'];

    ClearButton.prototype.events = {
      'click': 'onClick'
    };

    ClearButton.prototype.onClick = function() {
      return _.each(this.collection.where({
        done: true
      }), function(model) {
        return model.destroy();
      });
    };

    return ClearButton;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.EditForm = (function(superClass) {
    extend(EditForm, superClass);

    function EditForm() {
      return EditForm.__super__.constructor.apply(this, arguments);
    }

    EditForm.prototype.template = JST['edit_form'];

    EditForm.prototype.tagName = 'span';

    EditForm.prototype.events = {
      'blur input:text': 'updateContent'
    };

    EditForm.prototype.updateContent = function(event) {
      var value;
      value = event.target.value;
      if (value !== '') {
        this.model.save({
          content: value
        });
      }
      Backbone.Events.off('blur');
      return this.remove;
    };

    return EditForm;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.TaskForm = (function(superClass) {
    extend(TaskForm, superClass);

    function TaskForm() {
      return TaskForm.__super__.constructor.apply(this, arguments);
    }

    TaskForm.prototype.template = JST['form'];

    TaskForm.prototype.events = {
      'keydown #task_input': 'addTask'
    };

    TaskForm.prototype.addTask = function(event) {
      var val;
      val = $('#task_input').val();
      if (event.which !== 13 || val === '') {
        return;
      }
      this.collection.create({
        content: val
      });
      return $('#task_input').val('');
    };

    return TaskForm;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.Layout = (function(superClass) {
    extend(Layout, superClass);

    function Layout() {
      return Layout.__super__.constructor.apply(this, arguments);
    }

    Layout.prototype.template = JST['layout'];

    Layout.prototype.initialize = function() {
      this.collection = new MyApp.Collections.Tasks;
      this.collection.fetch();
      return console.log(this.collection);
    };

    Layout.prototype.regions = {
      form: '#task_form',
      clear_button: '#clear',
      count: '#task_count',
      list: '#task_list'
    };

    Layout.prototype.onRender = function() {
      this.showChildView('form', new MyApp.Views.TaskForm({
        collection: this.collection
      }));
      this.showChildView('clear_button', new MyApp.Views.ClearButton({
        collection: this.collection
      }));
      this.showChildView('count', new MyApp.Views.TaskCount({
        collection: this.collection
      }));
      return this.showChildView('list', new MyApp.Views.TaskList({
        collection: this.collection
      }));
    };

    return Layout;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.Task = (function(superClass) {
    extend(Task, superClass);

    function Task() {
      return Task.__super__.constructor.apply(this, arguments);
    }

    Task.prototype.template = JST['task'];

    Task.prototype.tagName = 'li';

    Task.prototype.className = function() {
      if (this.model.get('done')) {
        return 'done';
      }
    };

    Task.prototype.ui = {
      checkbox: 'input[type=checkbox]'
    };

    Task.prototype.events = {
      'change input:checkbox': 'changeDone',
      'dblclick span.task_content': 'editTask',
      'blur input#edit_task_content': 'render'
    };

    Task.prototype.changeDone = function(event) {
      if (this.ui.checkbox.prop('checked')) {
        this.model.set({
          'done': true
        });
      } else {
        this.model.set({
          'done': false
        });
      }
      this.model.save();
      return this.$el.toggleClass('done');
    };

    Task.prototype.editTask = function(event) {
      var view;
      view = new MyApp.Views.EditForm({
        model: this.model
      });
      return this.$el.html(view.render().el).find('input').focus();
    };

    return Task;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.TaskCount = (function(superClass) {
    extend(TaskCount, superClass);

    function TaskCount() {
      return TaskCount.__super__.constructor.apply(this, arguments);
    }

    TaskCount.prototype.template = JST['task_count'];

    TaskCount.prototype.tagName = 'p';

    TaskCount.prototype.templateContext = function() {
      return {
        all: this.collection.length,
        done: this.collection.where({
          done: true
        }).length,
        undone: this.collection.where({
          done: false
        }).length
      };
    };

    TaskCount.prototype.collectionEvents = function() {
      return {
        'change': this.render,
        'remove': this.render,
        'sync': this.render
      };
    };

    return TaskCount;

  })(Backbone.Marionette.View);

}).call(this);

(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  MyApp.Views.TaskList = (function(superClass) {
    extend(TaskList, superClass);

    function TaskList() {
      return TaskList.__super__.constructor.apply(this, arguments);
    }

    TaskList.prototype.tagName = 'ul';

    TaskList.prototype.childView = MyApp.Views.Task;

    return TaskList;

  })(Backbone.Marionette.CollectionView);

}).call(this);
