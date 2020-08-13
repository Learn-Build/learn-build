import React from 'react';
import PropTypes from 'prop-types';
import { Heading, Text } from '@chakra-ui/core';
import Container from '../components/Container';
import NavigationBar from '../components/NavigationBar';
import { fetchUsers } from '../clients/index';

export default function User({ id, name, email }) {
  return (
    <div>
      <NavigationBar />
      <Container>
        <Heading>{`${name}'s Page`}</Heading>
        <Text>{email}</Text>
        <Text>
          User ID:
          {id}
        </Text>
      </Container>
    </div>
  );
}

User.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
};

User.defaultProps = {
  id: '0',
  name: 'User',
  email: 'Email',
};

export async function getStaticPaths() {
  const users = await fetchUsers();
  const paths = users.map((user) => `/${user.name}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const userName = context.params.user;
  const users = await fetchUsers();
  const userData = users.find((t) => t.name === userName);
  return { props: userData };
}
