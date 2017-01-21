class MyApp.Collections.Tasks extends BackboNeDB.Collection
  model: MyApp.Models.Task
  store: new Store
    filename: './todo.db'
    autoload: true
