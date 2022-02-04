import { Box, Typography } from '@mui/material'

import { makeStyles } from '@mui/material'
const useStyles = makeStyles({
    error: {
        width: '80%',
        height: 'auto',
        margin: 'auto',
        objectPostion: 'center 0%'
    }
})
const ErrorScreen = () => {

    const error = 'https://i.stack.imgur.com/01tZQ.png'
    return (
        <Box>
            <Typography mt={2} mb={2}>
                Response
            </Typography>
            <Box style={{ display: 'flex' }}>
                <img src={error} className={classes.error} />
            </Box>
        </Box>
    )
}

export default ErrorScreen