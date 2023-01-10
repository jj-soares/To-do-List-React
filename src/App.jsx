import { Container, ContainerItens, Input, Button, Flex, Spacer, Item } from "./styles";

import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState([]);

  const addTask = () => {
    if (!task) return toast.info('Preencha uma Tarefa ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });


    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
   
    };

    setListTask([...listTask, newTask]);
    setTask("");
  }

  const removeTask = (id) => {
    const newList = listTask.filter((task) => task.id !== id);
    setListTask(newList);

  }

  const toggleChecked = (id, checked) => {
    const index = listTask.findIndex((task) => task.id === id);
    const newList = listTask;
    newList[index].checked = !checked;

    setListTask([...newList]);

  }

  return (
    <Container>
      <ContainerItens>
        <h1 className='title'>
          TODO LIST
        </h1>
        <Spacer />

        <Flex direction='row'>
          <Input placeholder="Digite sua Tarefa !" onChange={(e) => setTask(e.target.value)} value={task} />

          <Button onClick={addTask}>Adiconar!</Button>

        </Flex>
        <Spacer margin="16px"  />

        <ul>
          {listTask.map((task) => (
            <>
              <Item key={task.id} checked={task.checked} >
                <p>{task.task}</p>
                <Flex direction="row" >
                  <button onClick={() => toggleChecked(task.id, task.checked)}> <i className='bx bx-check-double'></i> </button>
                  <button onClick={() => removeTask(task.id)}> <i className='bx bx-trash'></i> </button>
                </Flex>
              </Item>
              <Spacer margin='12px' />
            </>
          ))}

        </ul>
       
      </ContainerItens>
      <ToastContainer />
    </Container>

  );
}

export default App 
