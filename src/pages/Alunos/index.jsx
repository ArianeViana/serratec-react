
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import axios from "axios";
import { useEffect, useState } from "react";
import Lottie from "react-lottie"
import carregandoAnimacao from "../../animations/loading.json"


const Alunos = () => {
  const [alunos, setAlunos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: carregandoAnimacao,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then(({ data }) => {
      setAlunos(data.results);
    });
  }, []);

  useEffect(() => {
    if (alunos) {
      setTimeout(() =>{
        setCarregando(false);
      }, 2000)
    }
  }, [alunos]);

  return (
    <>
      
      <Container maxWidth="sm">
        {carregando ? (
          <Lottie 
          options={defaultOptions}
            height={400}
            width={400}
          />
        ) : (
          <TableContainer component={Paper} sx={{ mt: 3 }}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Id</TableCell>
                  <TableCell align="right">Nome</TableCell>
                  <TableCell align="right">Idade</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {alunos.map((aluno) => (
                  <TableRow
                    key={aluno.id.value}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{aluno.id.value}</TableCell>
                    <TableCell align="right">{aluno.name.first}</TableCell>
                    <TableCell align="right">{aluno.dob.age}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
};

export default Alunos;
