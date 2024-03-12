import { Table, TableBody, TableCell, TableRow } from "../../node_modules/@mui/material/index";
import "./UpcomingMatchesTable.css";
import { UpcomingMatch } from "../types";
import { DateTime } from "luxon";

type UpcomingMatchesTableProps = {
  matches: UpcomingMatch[],
  deleteMatchHandler: (row: number) => void
}

export default function UpcomingMatchesTable(props: UpcomingMatchesTableProps) {
  return (
    <>
      <Table size="small">
        <TableBody>
          {props.matches.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell" onClick={() => props.deleteMatchHandler(row.id)}>x</TableCell>
              <TableCell className="tableCell">{row.player1}</TableCell>
              <TableCell className="tableCell">vs</TableCell>
              <TableCell className="tableCell">{row.player2}</TableCell>
              <TableCell className="tableCell">{row.time.toLocaleString(DateTime.DATETIME_MED)}</TableCell>
              <TableCell className="tableCell">
                {
                  row.restreamer ? `Restreamer: ${row.restreamer}` : "Restreamer needed"
                }
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </>

  );
}