import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import FlickrSearchInput from './FlickrSearchInput';
import FlickrSearchResults from './FlickrSearchResults';

import MySearchBox from './MySearchBox'
import {observer} from 'mobx-react';

const theme = createMuiTheme();

const FlickrSearchFrame = ({children}) => {
    return (
        <MuiThemeProvider theme={theme}>
            <div>
                {children}
            </div>
        </MuiThemeProvider>
    );
};

const FlickrSearchBox = ListItem => observer(MySearchBox(FlickrSearchFrame, FlickrSearchInput, FlickrSearchResults(ListItem)));

export default FlickrSearchBox