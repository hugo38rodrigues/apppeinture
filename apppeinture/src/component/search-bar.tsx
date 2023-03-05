import React from 'react';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import {styled, alpha} from '@mui/material/styles';

interface searchBarProps {
    researchWord: () => void
}

const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));


const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
const SearchBar = (props: searchBarProps) => {
    const {researchWord} = props
    return (
        <Box sx={{flexGrow: 1}}>
            <Search>
                <StyledInputBase
                    placeholder="Search…"
                    inputProps={{'aria-label': 'search'}}
                    onChange={researchWord()}
                />
            </Search>
        </Box>
    );
};

export default SearchBar;
