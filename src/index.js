import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import FlickrSearchBox from './FlickrSearchBox';
import './index.css';


import FlickPhoto from './flickPhoto'

const RepoListItem = ({result}) => {
    return (
        <div>
        </div>
    );
};

RepoListItem.propTypes = {
    result: PropTypes.object.isRequired
};

const RepoSearchBox = FlickrSearchBox(RepoListItem);

ReactDOM.render(
    <RepoSearchBox searchStore={new FlickPhoto()}/>,
    document.getElementById('root')
);
