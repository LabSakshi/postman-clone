import { Box, Select, MenuItem, TextField, Button } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { height } from '@mui/system'
import { Component } from 'react'

const useStyles=makeStyles({
    select:{
        width:150,
        height:40,

    },textField:{
        width:'100%',
        backgroundColor:'#F6F6F6'
    }, button:{
        width:100,
        height:40,
        marginLeft:[5, '!important']

    },component:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between'
    }
})

const Form = () => {
    const classes=useStyles()
    return (
        <Box className={classes.component}>
            <Select
                // value={age}
                label="POST"
                // onChange={handleChange}
                className={classes.select}
            >
                <MenuItem value={10}>POST</MenuItem>
                <MenuItem value={20}>GET</MenuItem>
            </Select>
        <TextField
        size='small'
        className={classes.textField}/>
        <Button className={classes.button}
        variant="contained">
            Send
        </Button>
        </Box>)
}

export default Form