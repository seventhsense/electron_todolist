class MyApp.Views.TaskList extends Backbone.Marionette.CollectionView
  tagName: 'ul'
  className: 'list-group'
  childView: MyApp.Views.Task

  _removeChildView: (view)->
    $(view.el).animateCss('bounceOutRight')
    _.defer -> super(view)
