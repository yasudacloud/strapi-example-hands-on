import React, {useEffect, useState} from 'react';
import {Table, Thead, Tbody, Tr, Td, Th, Typography, Box} from '@strapi/design-system';
import axiosInstance from "../../utils/axiosInstance";

const HomePage = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axiosInstance.get(`/strapi-plugin-user-pools`).then(response => {
      console.log(response.data)
      setUsers(response.data.Users)
    })
  }, [])
  return (
    <Box padding={8} background="neutral100">
      <Table colCount={4} rowCount={users.length}>
        <Thead>
          <Tr>
            <Th>
              <Typography variant="sigma">name</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">Status</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">CreateDate</Typography>
            </Th>
            <Th>
              <Typography variant="sigma">LastModifiedDate</Typography>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map(user => <Tr key={user.Username}>
            <Td>
              <Typography textColor="neutral800">{user.Username}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{user.UserStatus}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{user.UserCreateDate}</Typography>
            </Td>
            <Td>
              <Typography textColor="neutral800">{user.UserLastModifiedDate}</Typography>
            </Td>
          </Tr>)}
        </Tbody>
      </Table>
    </Box>
  );
};

export default HomePage;
