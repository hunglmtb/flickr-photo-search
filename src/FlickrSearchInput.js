import React from 'react';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputLabel from '@material-ui/core/InputLabel';

import TablePaginationActionsWrapped from './TablePaginationActionsWrapped';


const classes  = {
    root: {
        width: '100%',
        margin: '3em'
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    formControl: {
        minWidth: 120,
    },
    InputLabel:{
        padding:'2em'
    },
    textField: {
        marginLeft: '2em',
        marginRight: '2em',
        width: 200,
    },
};

const FlickrSearchInput = ({query, onSubmit, onQueryUpdate, rowsPerPage,page,
                            count, onChangePage, onChangeRowsPerPage,
                            onChangeOrder, sort}) => {
    const handleKeyDown = (event) => {
        const ENTER_KEY = 13;
        if (event.keyCode === ENTER_KEY) {
            event.preventDefault();
            onSubmit();
        }
    };

    const pagination = count>0?(
            <Table className={classes.table}>
            <TableBody>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TablePagination
                        colSpan={3}
                        count={count}
                        labelRowsPerPage={'Item per Page'}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={onChangePage}
                        onChangeRowsPerPage={onChangeRowsPerPage}
                        ActionsComponent={TablePaginationActionsWrapped}
                    />
                </TableRow>
            </TableFooter>
        </Table>)
        :null;
    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <TextField
                           label="Search..."
                           type="search"
                           className={classes.textField}
                           margin="normal"
                           fullWidth={false}
                           value={query}
                           onChange={(event) => onQueryUpdate(event.target.value)}
                           onKeyDown={handleKeyDown}/>
                <FormControl className={classes.formControl}>
                    <InputLabel>Sort by</InputLabel>
                    <NativeSelect
                        value={sort}
                        onChange={onChangeOrder} >
                        <option value="" />
                        <option value={'relevance'}>Relevance</option>
                        <option value={'date-posted-asc'}>Date Posted Asc</option>
                        <option value={'date-posted-desc'}>Date Posted Desc</option>
                        <option value={'date-taken-asc'}>Date Taken Asc</option>
                        <option value={'date-taken-desc'}>Date Taken Desc</option>
                        <option value={'interestingness-asc'}>Interestingness Asc</option>
                        <option value={'interestingness-desc'}>Interestingness Desc</option>
                    </NativeSelect>
                </FormControl>
                {pagination}
            </div>
        </Paper>

    );

};

FlickrSearchInput.propTypes = {
    query: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onQueryUpdate: PropTypes.func.isRequired
};

export default FlickrSearchInput;