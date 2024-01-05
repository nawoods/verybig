import { Table, TableBody, TableCell, TableRow } from "../../node_modules/@mui/material/index";
import "./UpcomingMatchesTable.css";


type MatchInfo = {
  id: number,
  player1: string,
  player2: string,
  time: number,
  restreamer?: string
}

type UpcomingMatchesTableProps = {
  matches: MatchInfo[],
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
              <TableCell className="tableCell">{row.time.toString()}</TableCell>
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