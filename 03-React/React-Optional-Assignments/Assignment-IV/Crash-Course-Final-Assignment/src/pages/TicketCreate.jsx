import {
  Box,
  Button,
  Container,
  Flex,
  FormLabel,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const TicketCreate = () => {
  const inputFocusRef = useRef();
  const navigate = useNavigate();
  const toast = useToast();

  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({
      ...ticket,
      [name]: name === "priority" && value != "" ? +value : value,
    });
  };

  const handleTicketCreate = async (e) => {
    e.preventDefault();
    try {
      if (
        ticket.title === "" ||
        ticket.description === "" ||
        ticket.priority === "" ||
        ticket.status === "" ||
        ticket.assignee === ""
      ) {
        toast({
          title: "Error",
          description: "All fields are required",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
        return;
      }

      let response = await axios({
        method: "post",
        url: "http://localhost:3000/tickets",
        data: ticket,
      });
      if (response.status === 201) {
        navigate("/tickets");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    inputFocusRef.current.focus();
  }, []);
  return (
    <Container>
      <form onSubmit={handleTicketCreate}>
        <Flex
          bg={"gray.100"}
          p={4}
          my={4}
          border={"1px"}
          borderColor={"gray.200"}
          gap={4}
          direction="column"
        >
          <Box>
            <FormLabel>Title</FormLabel>
            <Input
              bg={"white"}
              size={"lg"}
              placeholder="Enter Title"
              name="title"
              value={ticket.title}
              onChange={handleInputChange}
              ref={inputFocusRef}
            />
          </Box>
          <Box>
            <FormLabel>Description</FormLabel>
            <Textarea
              bg={"white"}
              size={"lg"}
              placeholder="Enter Description"
              name="description"
              value={ticket.description}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Assignee</FormLabel>
            <Select
              bg={"white"}
              name="assignee"
              value={ticket.assignee}
              onChange={handleInputChange}
              placeholder="Select Assignee"
            >
              <option value="Nageshwar">Nageshwar</option>
              <option value="Manjusha">Manjusha</option>
              <option value="Dhanashree">Dhanashree</option>
              <option value="Kiran">Kiran</option>
              <option value="Rutuja">Rutuja</option>
              <option value="Suyog">Suyog</option>
              <option value="Sonali">Sonali</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Status</FormLabel>
            <Select
              bg={"white"}
              name="status"
              value={ticket.status}
              onChange={handleInputChange}
              placeholder="Select Status"
            >
              <option value="pending">Pending</option>
              <option value="progress">Progress</option>
              <option value="completed">Completed</option>
            </Select>
          </Box>
          <Box>
            <FormLabel>Priority</FormLabel>
            <Select
              type="number"
              bg={"white"}
              name="priority"
              value={ticket.priority}
              onChange={handleInputChange}
              placeholder="Select Priority"
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
            </Select>
          </Box>
          <Button
            display={"block"}
            w={"50%"}
            mx={"auto"}
            type={"submit"}
            variant={"outline"}
            colorScheme={"red"}
          >
            Create Ticket
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default TicketCreate;
