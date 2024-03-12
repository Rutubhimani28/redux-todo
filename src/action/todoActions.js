export const AddTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    const hasTodo = todos.find(i => i.todo === todo);
    if (!hasTodo && todo !== '') {
        dispatch({
            type: 'ADD_TODO',
            payload: [{ id: todo, todo }, ...todos]
        });

    }
}
export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();

    dispatch({
        type: 'REMOVE_TODO',
        payload: todos.filter((item) => item.id !== todo.id)
    })
}

export const EditTodoAction = (todo) => (dispatch, getState) => {
    const {
        Todo: { todos },
    } = getState();
    let newTodos = [...todos];
    newTodos[todo.index] = { ...newTodos[todo.index], todo: todo.todo };
    dispatch({
        type: 'EDIT_TODO',
        payload: newTodos
    });
    console.log(newTodos);
};
