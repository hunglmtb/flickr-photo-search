import React, {Component} from 'react';
import PropTypes from 'prop-types';

const MySearchBox = (SearchFrame, SearchInput, SearchResults) => {
    return class extends Component {
        static propTypes = {
            searchStore: PropTypes.object.isRequired
        };

        render() {
            return (
                <SearchFrame>
                    <SearchInput query={this.props.searchStore.query}
                                 onQueryUpdate={value => this.props.searchStore.updateQuery(value)}
                                 onSubmit={() => this.props.searchStore.search()}
                                 page={this.props.searchStore.page-1}
                                 rowsPerPage={this.props.searchStore.rowsPerPage}
                                 count={this.props.searchStore.count}
                                 onChangePage={(event, page) => this.props.searchStore.onChangePage(event, page)}
                                 onChangeRowsPerPage={(event) => this.props.searchStore.onChangeRowsPerPage(event)}
                                 onChangeOrder={(event) => this.props.searchStore.onChangeOrder(event.target.value)}
                                 sort={this.props.searchStore.sort}
                    />
                    <SearchResults results={this.props.searchStore.results.slice()}
                                   notFound={this.props.searchStore.notFound}
                    />
                </SearchFrame>
            );
        }
    };
};


export default MySearchBox