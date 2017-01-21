class MyApp.Views.TaskList extends Backbone.Marionette.CollectionView
  tagName: 'ul'
  childView: MyApp.Views.Task
