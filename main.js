function ToDoItem(task, isCompleted) {
    this.task = ko.observable(task);
    this.isCompleted = ko.observable(isCompleted);
}

function ListViewModel(){
  var self = this;
  
  self.toDoItems = ko.observableArray([
        new ToDoItem("Wake up", false),
        new ToDoItem("Wash your teeth", false),
        new ToDoItem("Learn Knockout JS", false),
        new ToDoItem("Have some brekfast", false)
    ]);
  
  self.addTodoItem = function(){
    self.toDoItems.push(new ToDoItem("", false));
  }
  
  self.removeTodoItem = function(todoItem){
    self.toDoItems.remove(todoItem);
  }
}

ko.applyBindings(new ListViewModel());
