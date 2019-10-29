import React from 'react';
import { Icon, Card } from 'antd';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { enableDrag, disableDrag } from '../Actions/helpers';

const Publication = styled(Card)`
    > .ant-card-body {
        display: grid;
        align-items: center;
        grid-template-columns: 0 95% 5%;
    }
`;

const DragSpace = styled.hr`
    border: 2px dashed transparent;
    &.drop-here {
        border-color: lightgreen;
    }
`;

export default ({ list = [], authorName = '', authorEmail = '' }) => {
    const { Meta } = Card;
    const draggable = useSelector(state => state.draggable);
    const dispatch = useDispatch();
    const watchDrag = ev => {
        // console.log(ev.dataTransfer);
    };
    const enableDrop = ev => ev.preventDefault();
    const enableToDrop = ev => {
        const element = ev.target;
        ev.preventDefault();
        if(!element.className.includes('drop-here')) {
            element.className = `${element.className} drop-here`;
        }
    };
    const dragStart = ev => {
        const element = ev.target;
        element.className = `${element.className} elementDragStart`;
        ev.dataTransfer.setData('text', element.id);
    };
    const dragDrop = ev => {
        const el =ev.dataTransfer.getData('text');
    };
    const dragEnd = ev => {
        ev.target.className = ev.target.className.replace(' elementDragStart', '');
        dispatch(disableDrag());
    };
    return (
    <div onDrop={dragDrop} onDragOver={enableDrop}>
        {list.map(publication => (
            <div key={publication.id}>
            <Publication
                id={`publication-${publication.id}`}
                draggable={draggable === publication.id}
                onDrag={watchDrag}
                onDragStart={dragStart}
                onDragEnd={dragEnd}
                className="publication"
            >
                <Meta
                    title={publication.title}
                    description={publication.body}
                />
                <Icon
                    type="drag"
                    onMouseDown={() => dispatch(enableDrag(publication.id))}
                    onMouseUp={() => dispatch(disableDrag())}
                />
            </Publication>
            { draggable && <DragSpace className="drag-space drop-here" onDragOver={enableToDrop}/> }
            </div>
        ))}
    </div>
)};
