import React from 'react';
import PropTypes from 'prop-types';
import { Avatar, Box, Text } from '@chakra-ui/core';
import NavigationBar from '../components/NavigationBar';
import HeaderGrid from '../components/HeaderGrid';
import ResponsiveHeading from '../components/ResponsiveHeading';
import Container from '../components/Container';
import { fetchUsers } from '../clients/index';
import { RESPONSIVE_TEXT_ALIGN } from '../styles/responsiveStyles';

export default function User({ id, name, email }) {
  return (
    <div>
      <NavigationBar />
      <HeaderGrid>
        <Avatar size="xl" name={name} m="auto" />
        <Box>
          <ResponsiveHeading>{name}</ResponsiveHeading>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN} mb={5}>
            {email}
          </Text>
        </Box>
        <Box>
          <Text textAlign={RESPONSIVE_TEXT_ALIGN}>{`ID: ${id}`}</Text>
        </Box>
      </HeaderGrid>
      <Container />
    </div>
  );
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export async function getStaticPaths() {
  const users = await fetchUsers();
  const paths = users.map((user) => `/${user.id}`);
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const userId = context.params.user;
  const users = await fetchUsers();
  const userData = users.find((t) => t.id === userId);
  return { props: userData };
}
