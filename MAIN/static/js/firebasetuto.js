let todos = [];
// 
const renderTodos = function(){

    db.collection('todos').get().then(data => {
        console.log(data.docs[0].data());
    });
}
renderTodos();