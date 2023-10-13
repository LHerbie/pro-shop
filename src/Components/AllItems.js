import { Table, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";
import { useEffect, useState } from "react";

export default function AllItems() {

    function createData(id, name, category, description, price) {
        return { id, name, category, description, price };
      }
      
      const rows = [
        createData(1, 'Nanoflare 900', 'Racket', 'Head-light Yonex racket', 300),
        createData(2, 'Towel Grip', 'Misc.', 'Yonex towel grip', 15),
        createData(3, 'BG-65 Strings', 'Misc.', 'Durable Yonex strings', 30),
      ];

      var [tabledata, setTableData] = useState([]);

      useEffect(() => {
        fetch("http://localhost:5226/Products")
            .then(res => res.json())
            .then(res => setTableData(res))
            .catch(() => alert("Something went wrong :("));
      }, []);

      console.log(tabledata);

        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="right" >Item Name</TableCell>
                  <TableCell align="right">Category&nbsp;(g)</TableCell>
                  <TableCell align="right">Description&nbsp;(g)</TableCell>
                  <TableCell align="right">Price&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tabledata.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.description}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>    
          )
    }