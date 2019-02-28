import React, { useEffect } from 'react'
import SearchItem from './SearchItem'
import PropTypes from 'prop-types'
const update = require('immutability-helper')


const SearchList = ({ getFetchData, isLoading, data, updateFetchData }) => {
    useEffect(() => {
        getFetchData()
    }, [])
    const __moveItem = (dragIndex, hoverIndex) => {
        const dragItem = data[dragIndex]
        updateFetchData(
            update(data,
                {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]]
                }))
    }
    return (
        <div>
            {!isLoading ?
                <ul>
                    {data && data.map((item, index) => (
                        <SearchItem
                            index={index}
                            key={item.id}
                            {...item}
                            moveItem={(dragIndex, hoverIndex) => __moveItem(dragIndex, hoverIndex)} />
                    ))}
                </ul>
                : 'Загрузка...'}
        </div>
    )
}





SearchList.propTypes = {
    getFetchData: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        userId: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired
    }))
}


export default SearchList
