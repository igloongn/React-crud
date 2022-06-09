import { TextField, Box, Container, Button, Link } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {useNavigate} from 'react-router-dom'

function App() {

  const navigate = useNavigate()


  return (
    <Container>
      <center>
        The Main CRUD
      </center>
      <br />
      <br />
      <br />
      <Box>
      <Button
            color="primary"
            endIcon={<AddIcon />}
            startIcon={<AddTaskIcon />}
            onClick={() => navigate('/create')}
          >
            Create</Button>
        <Button
          onClick={() => navigate('/read')}
          color="success"
        >Read</Button>
      </Box>
    </Container>
  );
}

export default App;
