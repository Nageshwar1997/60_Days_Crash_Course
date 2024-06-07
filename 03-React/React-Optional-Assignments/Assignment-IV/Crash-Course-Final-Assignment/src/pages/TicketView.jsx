import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingIndicator from "../components/LoginIndicator";
import ErrorIndicator from "../components/ErrorIndicator";
import axios from "axios";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
const TicketView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);

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

  const handleDeleteTicket = async () => {
    try {
      let resp = await axios({
        method: "delete",
        url: `http://localhost:3000/tickets/${id}`,
      });
      if (resp.status === 200) {
        navigate("/tickets");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAndUpdateTicket(id);
  }, [id]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (err) {
    return <ErrorIndicator />;
  }
  const { title, status, priority, assignee, description } = ticket;
  return (
    <Card>
      <CardHeader>
        <Heading size="md">{title}</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Status
            </Heading>
            <Text pt="2" fontSize="sm">
              {status}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Priority
            </Heading>
            <Text pt="2" fontSize="sm">
              {priority}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Assigned To
            </Heading>
            <Text pt="2" fontSize="sm">
              {assignee}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Description
            </Heading>
            <Text pt="2" fontSize="sm">
              {description}
            </Text>
          </Box>
        </Stack>
      </CardBody>
      <CardFooter>
        <HStack spacing={5}>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={() => {
              navigate(`/ticket/edit/${id}`);
            }}
          >
            Edit Ticket
          </Button>
          <Button
            variant="outline"
            colorScheme="red"
            onClick={handleDeleteTicket}
          >
            Delete Ticket
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default TicketView;
