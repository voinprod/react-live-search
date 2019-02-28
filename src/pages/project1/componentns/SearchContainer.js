import React from 'react'
import SearchForm from './SearchForm'
import { connect } from 'react-redux'
import './index.css'
import SearchList from './SearchList'
import { getFetchData, getSearchValue, updateFetchData } from '../action'


class SearchContainer extends React.Component {
    render() {
        return (
            <div className="formBody">
                <h1 className="formTitle">React search!</h1>
                <SearchForm {...this.props} />
                <SearchList {...this.props} />
            </div>
        )
    }
}
const filterSearchQuery = (data, searchQuery) => {
    return searchQuery ? data.filter(dat => (dat.title.includes(searchQuery))) : data
}
const mapStateToProps = (store) => {
    return {
        isLoading: store.search.isLoading,
        searchQuery: store.search.searchQuery,
        data: filterSearchQuery(store.search.data, store.search.searchQuery)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getFetchData: () => dispatch(getFetchData()),
        getSearchValue: (searchQuery) => dispatch(getSearchValue(searchQuery)),
        updateFetchData: (newData) => dispatch(updateFetchData(newData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)