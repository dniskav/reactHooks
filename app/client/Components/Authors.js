import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { fecthPublications } from '../Actions/publications';

const Authors = ({ authorsList }) => {
    const dispatch = useDispatch();
    return (
        <>
            <h2>Authors List</h2>
            <dl>
                {authorsList.length > 0 && authorsList.map(author => (
                    <dt key={author.id}>
                        <Button onClick={() => dispatch(fecthPublications(author.id, dispatch))}>
                            {author.firstName} {author.lastName}
                        </Button>
                    </dt>
                ))}
            </dl>
        </>
    )
};

export default Authors;
