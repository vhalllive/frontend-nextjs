import { Constants } from "../../components/utils/Constants";
import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Box,
  Center,
  Container
} from '@chakra-ui/react';


export default function Events({ events }) {
  console.log(events);
  return (
    <div>
      <Box w='100%' p={4}>
        <Center>
          <Heading as='h1' size='2xl' >
            List of Events
          </Heading>
        </Center>
        

      <TableContainer maxW="75%" >
        <Table variant='striped'>
          <Thead>
            <Tr>
              <Th>Studio</Th>
              <Th>Date</Th>
              <Th>EventType</Th>
              <Th>Slug</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {events.map((event) => (
             <Tr key={event.id}>
                <Td>{event.attributes.Studio}</Td>
                <Td>{event.attributes.Date}</Td>
                <Td>{event.attributes.EventType}</Td>
                <Td>{event.attributes.Slug}</Td>
                <Td>{event.attributes.Time}</Td>
             </Tr>   
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      </Box>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch(`${Constants.API}${Constants.EVENTS}${Constants.QUERY_POPULATE}`);
  console.log(`${Constants.API}${Constants.EVENTS}${Constants.QUERY_POPULATE}`);
  const data  = await response.json();
  return {
      props: {
          events : data.data,
      },
  }
}