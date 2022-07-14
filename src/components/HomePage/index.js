import './index.scss'

import React from 'react'

import NewsList from '../NewsList'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import NewsListEco from '../NewsStack/Economy'
import NewsListHealth from '../NewsStack/Health'
import NewsListPolitic from '../NewsStack/Politics'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const HomePage = () => {
   
  return (

    <div className='container home-page'>
    
        <Stack className='primary-news'>
            <Item className='headline'>
                <NewsList></NewsList>
            </Item>
        </Stack>

        <Stack className='secundary-news' direction="row" spacing={2}>

            <Item className='politic'>
                <NewsListEco />
            </Item>

            <Item className='economy'>  
                <NewsListHealth />
            </Item>

            <Item className='health'>
                <NewsListPolitic />
            </Item>
        
        </Stack>

     
         
    </div>
  )
}

export default HomePage
