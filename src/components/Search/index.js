
import './index.scss'
import Box from '@mui/material/Box';
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';


const Search = (props) => {
    const [text, setText] = useState('');

    const onTextChange = (evento) => {
        setText(evento.target.value);
    };

    const onSearchClick = () => {
        if (text.length > 3) {
            props.onSearch(text);
        }
    };

    return (
        <div role='search' className='searchbar'>
            {/* <TextField
                className='text-zone'
                label="Buscar Noticias"
                variant="outlined"
                value={text}
                onChange={onTextChange}
                role='searchbox'

            /> */}
            
            <TextField 
                fullWidth label="Buscar Noticias" 
                id="fullWidth"
                className='text-zone'
                value={text}
                onChange={onTextChange}
                role='searchbox'
                 />

            {/* <Button
                variant="contained"
                onClick={onSearchClick}
                role='button'
            >
                Buscar
            </Button> */}
            <Box 
                sx={{ '& > :not(style)': { m: 1 } }}
                
                >
    
                <Fab className='navigation-icon' variant="extended">
                    <NavigationIcon 
                    sx={{ mr: 1 }}
                    
                    variant="contained"
                    onClick={onSearchClick}
                    role='button'
                    color='primary'
                    
                    
                     />
                    Buscar
                </Fab>

            </Box>



        </div>
    )
};


export default Search;
