class MyApp.Views.TaskList extends Backbone.Marionette.CollectionView
  tagName: 'ul'
  className: 'list-group'
  childView: MyApp.Views.Task

  _removeChildView: (view)->
    $(view.el).addClass('animated bounceOutRight')
    window.setTimeout (a)=>
      super(a)
    , 900, view
