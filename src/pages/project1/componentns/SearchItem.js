import React from 'react'
import SearchWord from './SearchWord';
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'
import { DropTarget, DragSource } from 'react-dnd';


const SearchItem = ({ connectDragSource, connectDropTarget, isDragging, title }) => {
    return connectDropTarget(
        connectDragSource(<li className="item" style={{ opacity: isDragging ? 0.2 : 1, }}>
            {title.split(' ').map(word => (
                <SearchWord
                    key={Date.now().toString() + Math.random()}
                    word={word} />
            ))}
        </li>)
    )
}

SearchItem.propTypes = {
    title: PropTypes.string.isRequired
}

//Targets
const itemTarget = {
    hover(props, monitor, component) {
        if (!component) {
            return null
        }
        const dragIndex = monitor.getItem().index
        const hoverIndex = props.index

        if (dragIndex === hoverIndex) {
            return
        }
        // Позиция при наведении
        const hoverBoundingRect = (findDOMNode(
            component,
        )).getBoundingClientRect()

        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

        const clientOffset = monitor.getClientOffset()

        const hoverClientY = (clientOffset).y - hoverBoundingRect.top

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
        }

        props.moveItem(dragIndex, hoverIndex)

        monitor.getItem().index = hoverIndex

    }
};

const collectTarget = connect => ({
    connectDropTarget: connect.dropTarget()
});

const itemSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    },
}

const collectSource = connect => ({
    connectDragSource: connect.dragSource(),
})


export default DropTarget('item', itemTarget, collectTarget)(
    DragSource('item', itemSource, collectSource)(SearchItem)
)

