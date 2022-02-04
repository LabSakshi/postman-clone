import { TableRow, TableCell, Checkbox, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useEffect } from "react"
import { useState } from "react"
const AddRow = () => {
useEffect(()=>{
    console.log(row)
})
    const [rowCount, setRowCount] = useState(0)
    const [row, setRow] = useState([rowCount])
    const addRow = () => {
        setRowCount(rowCount + 1)
        setRow([...row, rowCount])
        console.log(row)

        return rowCount
    }
    const useStyles = makeStyles({
        tableCell: {
            border: '1px solid rgba(224, 224, 224, 1)',
            borderCollapse: 'collapse',
            padding: ['7px 5px', '!important']
        }, checkbox: {
            padding: ['2px 5px', '!important']
        }, textfeild: {
            width: '100%'
        }
    })
    const classes = useStyles()


    return (<>
      {  row.map(() => {
              return (<TableRow>
                  <TableCell className={classes.tableCell}>
                      <Checkbox
                          size='large'
                          className={classes.checkbox}
                          onChange={() => addRow()} />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                      <TextField inputProps={{ style: { height: 30, padding: '0 5px' } }} className={classes.textfeild} />
                  </TableCell>
                  <TableCell className={classes.tableCell}>
                      <TextField inputProps={{ style: { height: 30, padding: '0 5px' } }} className={classes.textfeild} />
                  </TableCell>
              </TableRow>)
          })}
    </>)
}

export default AddRow