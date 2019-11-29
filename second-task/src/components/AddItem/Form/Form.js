import React from 'react';

const Form = (props) => {
    return (

        <form onSubmit={props.onsubmit}>
            <input type="text" className=' field item-name' value={props.text} onChange={props.onChange} placeholder='Item name'/>
            <input type="number" className=' field item-num' placeholder='Cost' value={props.num} onChange={props.onChangeNum}/>
            <span>KGS</span>
            <button type='submit' className='btn'>Add</button>
        </form>

    );
};

export default Form;