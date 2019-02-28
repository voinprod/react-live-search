import React from 'react'
import PropTypes from 'prop-types'

const SearchForm = ({ getSearchValue }) => {
    let text;
    const __handleChange = () => {
        getSearchValue(text.value)
    }
    return (
        <div className="searchBox">
            <input type="text" ref={el => text = el} onChange={() => __handleChange()} className="form-group" />
        </div>
    )
}

SearchForm.propTypes = {
    getSearchValue: PropTypes.func.isRequired
}

export default SearchForm
