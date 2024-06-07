import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoginIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import axios from "axios";
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
const TicketEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const toast = useToast();

  const [ticket, setTicket] = useState({
    title: "",
    description: "",
    priority: "",
    status: "",
  });

  async function fetchAndUpdateTicket(id) {
    setLoading(true);
    try {
      let res = await axios({
        method: "get",
        url: `http://localhost:3000/tickets/${id}`,
      });

      let data = res?.data;
      setLoading(false);
      setTicket(data);
    } catch (error) {
      setLoading(false);
      setErr(true);
    }
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTicket({
      ...ticket,
      [name]: name === "priority" && value != "" ? +value : value,
    });
  };
  const handleTicketEdit = async (e) => {
    e.preventDefault();
    try {
      if (
        title === "" ||
        description === "" ||
        priority === "" ||
        status === "" ||
        assignee === ""
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
        method: "put",
        url: `http://localhost:3000/tickets/${id}`,
        data: ticket,
      });

      if (response.status === 200) {
        navigate(`/ticket/view/${id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAndUpdateTicket(id);
  }, [id]);
  console.log(ticket);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }
  const { title, status, priority, assignee, description } = ticket;

  return (
    <Container>
      <form onSubmit={handleTicketEdit}>
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
              value={title}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Description</FormLabel>
            <Textarea
              bg={"white"}
              size={"lg"}
              placeholder="Enter Description"
              name="description"
              value={description}
              onChange={handleInputChange}
            />
          </Box>
          <Box>
            <FormLabel>Assignee</FormLabel>
            <Select
              bg={"white"}
              name="assignee"
              value={assignee}
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
              value={status}
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
              value={priority}
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
            Edit Ticket
          </Button>
        </Flex>
      </form>
    </Container>
  );
};

export default TicketEdit;
