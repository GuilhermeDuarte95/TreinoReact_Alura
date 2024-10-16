import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import IConsulta from "../../types/IConsulta";

function Tabela({consultas}: {consultas: IConsulta[] | null}){
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} aria-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Data</TableCell>
                            <TableCell>Horário</TableCell>
                            <TableCell>Profissional</TableCell>
                            <TableCell>Especialidade</TableCell>
                            <TableCell>Paciente</TableCell>
                            <TableCell>Modalidedade</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">22/03/2022</TableCell>
                            <TableCell>08:30</TableCell>
                            <TableCell>Monica Hillman</TableCell>
                            <TableCell>Clinica Geral</TableCell>
                            <TableCell>Caroline Carvalho</TableCell>
                            <TableCell>Particular</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Tabela;