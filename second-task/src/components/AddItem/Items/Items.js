import React from 'react';

const Items = (props) => {
    return (
        <div>
            <p className='block-txt'>{props.text}</p>
            <span className='block-cost'>{props.num}KGS</span>
            <button className='block-btn' onClick = {props.remove}><b>X</b></button>
        </div>
    );
};

export default Items;