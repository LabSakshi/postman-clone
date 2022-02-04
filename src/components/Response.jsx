import { Box, Typography, TextareaAutosize } from '@mui/material'

const Response = () => {
    const textAreaStyle={
        width:'100%',
        padding:10,
        background:`url(http://i.imgur.com/2cOaJ.png)`,
        backgroundAttachment:'local',
        backgroundRepeat:'no-repeat',
        paddingLeft:35,
        paddingTop:10,
        borderColor:'#ccc'
    }
    return (
        <Box>
            <Typography mt={2} mb={2}>
                Response
            </Typography>
            <TextareaAutosize
                minRows={3}
                maxRows={5}
                style={textAreaStyle}
                disabled='disabled'
            />
        </Box>
    )
}

export default Response