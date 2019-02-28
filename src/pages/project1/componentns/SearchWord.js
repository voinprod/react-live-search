import React, { useState } from 'react'
import PropTypes from 'prop-types'



const SearchWord = (props) => {
    const [display, setDisplay] = useState(true)
    return (
        <React.Fragment>
            {display && <span
                onClick={() => setDisplay(false)}
                className="wordClass">{props.word} </span>}
        </React.Fragment>
    )
}

SearchWord.propTypes = {
    word: PropTypes.string.isRequired
}

export default SearchWord
