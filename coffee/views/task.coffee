class MyApp.Views.Task extends Backbone.Marionette.View
  template: JST['task']
  tagName: 'li'
  className: ->
    css_class = 'list-group-item'
    if @model.get('done') then css_class += " done"
    css_class

  ui:
    checkbox: 'input[type=checkbox]'

  events:
    'change input:checkbox': 'changeDone'
    'dblclick span.task_content': 'editTask'
    'blur input#edit_task_content': 'render'

  changeDone: (event)->
    if @ui.checkbox.prop('checked')
      @model.set('done': true)
    else
      @model.set('done': false)
    @model.save()
    @$el.toggleClass('done')
    @$el.animateCss('rubberBand')

  editTask: (event)->
    view = new MyApp.Views.EditForm(model: @model)
    @$el.html(view.render().el)
      .find('input').focus()

  onRender: ->
    @$el.aniateCss('bounceInLeft')
