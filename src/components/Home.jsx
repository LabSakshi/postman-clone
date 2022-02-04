import React from 'react'
import Header from './Header'
import Form from './Form'
import SelectTab from './SelectTab'
import Response from './Response'
import { Box, margin } from '@mui/system'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles({
    component: {
        width: '60%',
        margin: '20px auto 0 auto'
    }
})

const Home = () => {
    const classes = useStyles()
    return (
        <div>
            <Header />
            <Box className={classes.component}>
                <Form />
                <SelectTab />
                <Response/>
            </Box>
        </div>
    )
}

export default Home