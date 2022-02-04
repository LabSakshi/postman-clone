import { Box, Tab, tabClasses, Tabs } from "@mui/material";
import { useState } from "react";
import { makeStyles } from "@mui/styles";

import CreateTable from './CreateTable';
import CreateJsontext from "./CreateJsonText";

const useStyles = makeStyles({
    component: {
        marginTop: 20
    },
    tab: {
        textTransform: ['none', '!important']
    }
})


const SelecTab = () => {
    const classes = useStyles()
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    const tabComponent = ['Params', 'Header', 'Body']
    return (
        <Box className={classes.component}>
            <Tabs value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                TabIndicatorProps={{
                    sx: { backgroundColor: '#F26B3A', height: 4, bottom: 2 }
                }}
                textColor="none">

                {tabComponent.map((tab) => {
                    return (
                        <Tab label={tab} className={classes.tab} />
                    )
                })}
            </Tabs>
            <Box role="tabp
            anel"
                hidden={value !== 0}
                id={`simple-tabpanel-${0}`}
            >
                <CreateTable text='Query Params'/>

            </Box>
            <Box role="tabpanel"
                hidden={value !== 1}
                id={`simple-tabpanel-${1}`}
                aria-labelledby={`simple-tab-${1}`}
            >
                <CreateTable text='Headers'/>

            </Box>
            <Box role="tabpanel"
                hidden={value !== 2}
                id={`simple-tabpanel-${2}`}
                aria-labelledby={`simple-tab-${2}`}
            >
              
                    <CreateJsontext/>
            </Box>

        </Box>
    )
}

export default SelecTab