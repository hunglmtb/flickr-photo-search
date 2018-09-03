import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import InputLabel from '@material-ui/core/InputLabel';

const classes = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        padding: '1em'
    },
    gridList: {
        width: 500,
        height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
};

const FlickrSearchResults = ListItem => {
    return class extends React.Component {
        static propTypes = {
            results: PropTypes.array.isRequired,
            notFound: PropTypes.string.isRequired
        };

        render() {
            let gridItems;
            if (this.props.results.length > 0) {
                gridItems =  <div className={classes.root}>
                    <GridList cellHeight={200} className={classes.gridList} cols={3}>
                        {this.props.results.map((result, index) => (
                            <GridListTile key={result.url_m}>
                                <img src={result.url_m} alt={result.title} />
                                <GridListTileBar
                                    title={result.title}
                                />
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            }
            else if (this.props.notFound){
                gridItems = <InputLabel>{this.props.notFound}</InputLabel>
            }
            else{
                gridItems = null;
            }

            return (
                gridItems
            );
        };
    };
};

export default  FlickrSearchResults;