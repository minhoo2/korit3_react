import { AppBar, Toolbar, Typography, Container, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Carlist from "./components/Carlist";
import AddCar from "./components/AddCar";

const queryClient = new QueryClient();

function App() {
  return (
    <Container maxWidth="xl">
    <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Car Shop | 자동차 거래소
          </Typography>
        </Toolbar>
      </AppBar>
      <QueryClientProvider client={queryClient}>
        <AddCar />
        <Carlist />
      </QueryClientProvider>
    </Container>
  )
}

export default App
