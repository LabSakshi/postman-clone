import { Typography, TextareaAutosize } from "@mui/material";


const CreateJsontext = () => {
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
        <><Typography mt={2} mb={2}>
          JSON
        </Typography>
        <TextareaAutosize
               minRows={3}
               maxRows={5}
               style={textAreaStyle}
            />

        </>
    )
}

export default CreateJsontext