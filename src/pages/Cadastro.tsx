import { Alert, Box, Button, Card, FormControl, FormLabel, Grid, Input, Modal, ModalClose, Typography } from "@mui/joy";
import Menu from "../components/Menu";
import { useState } from "react";
import theme from "../theme";

interface Endereco {
    logradouro: string,
    bairro: string,
    localidade: string
}

const Cadastro = () => {
    const [cep, setCep] = useState<string>();
    const [endereco, setEndereco] = useState<Endereco>();
    const [visible, setVisible] = useState<boolean>(false);
    const [successMessage, setSuccessMessage] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        
        event.preventDefault();
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            setEndereco({
                logradouro: data.logradouro,
                bairro: data.bairro,
                localidade: data.localidade
            })
            console.log(endereco)
            setVisible(true);
        })
    }

    const handleConfirm = () => {
        setVisible(false)
        setSuccessMessage(true)
        setTimeout(() => {setSuccessMessage(false)}, 5000)
    }

    return (
        <>
            <Menu />
            {
                successMessage
                &&
                <Alert
                    sx={{maxWidth: "1200px", margin: "16px auto", borderRadius: theme.vars.radius.sm}}
                    variant="soft"
                    color="success">
                    Cadastro feito com sucesso!
                </Alert>
            }
            <Box padding={3} display="flex" flexDirection="column" alignItems="center">
                <Typography level="h2">Cadastro</Typography>
                <Typography level="title-md">Cadastre-se para receber conteúdos educativos!</Typography>
            </Box>
            <Box maxWidth="1200px" margin="0 auto">
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <FormControl>
                                <FormLabel>Nome</FormLabel>
                                <Input placeholder="Nome"/>
                            </FormControl>
                        </Grid>
                        <Grid xs={6}>
                            <FormControl>
                                <FormLabel>Sobrenome</FormLabel>
                                <Input placeholder="Sobrenome"/>
                            </FormControl>
                        </Grid>
                        <Grid xs={8}>
                            <FormControl>
                                <FormLabel>Email</FormLabel>
                                <Input  placeholder="Digite seu email"/>
                            </FormControl>
                        </Grid>
                        <Grid xs={4}>
                            <FormControl>
                                <FormLabel>CEP</FormLabel>
                                <Input type="number"
                                required 
                                onChange={(event) => {setCep(event.target.value)}}
                                placeholder="Digite o CEP"/>
                            </FormControl>
                        </Grid>
                        <Grid xs={12}>
                            <Button type="submit" fullWidth>Enviar</Button>
                        </Grid>             
                    </Grid>
                </form>
            </Box>
            <Modal 
            open={visible} 
            onClose={() => setVisible(false)} 
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Card sx={{width: "400px "}}>
                    <ModalClose variant="outlined"></ModalClose>
                    <Typography level="title-lg">Confirme seu endereço:</Typography>
                    <Typography level="body-md">Rua: {endereco?.logradouro}</Typography>
                    <Typography level="body-md">Bairro: {endereco?.bairro}</Typography>
                    <Typography level="body-md">Cidade: {endereco?.localidade}</Typography> 
                    <Button onClick={handleConfirm}>Confirmar</Button>
                </Card>
            </Modal>
        </>
    );
}

export default Cadastro;