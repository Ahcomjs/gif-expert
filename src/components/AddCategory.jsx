import { useState } from "react"
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        if (inputValue.trim().length <= 1) return;
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Write a name and press enter..."
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}