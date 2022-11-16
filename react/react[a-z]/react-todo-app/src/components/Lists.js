import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({ todoData, setTodoData, handleClick }) => {
    console.log('Lists Component');
    const handleEnd = (result) => {
        console.log(result);

        if (!result.destination) return;

        const newTodoData = [...todoData];

        // 1. 변경시키는 아이템을 배열에서 지워줍니다.
        // return 값으로 지워진 아이템을 잡아줍니다.
        const [reorderItem] = newTodoData.splice(result.source.index, 1);

        // 원하는 자리에 reorderItem을  insult 해줍니다.
        newTodoData.splice(result.destination.index, 0, reorderItem);
        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    }

    return (
        <div>
            <DragDropContext onDragEnd={handleEnd}>
                <Droppable droppableId='todo'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                            {todoData.map((data, index) => (
                                <Draggable
                                    key={data.id}
                                    draggableId={data.id.toString()}
                                    index={index}
                                >
                                    {(provided, snapshot) => (
                                        <List 
                                            handleClick={handleClick}
                                            key={data.id}
                                            id={data.id}
                                            title={data.title}
                                            completed={data.completed}
                                            todoData={todoData}
                                            setTodoData={setTodoData}
                                            provided={provided}
                                            snapshot={snapshot}
                                        />
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
});

export default Lists;