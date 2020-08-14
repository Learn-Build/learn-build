import axios from 'axios';
import { BASE_LOCAL, BASE_PROD } from './base';
import USERS from '../fixtures/users';
import TAGS from '../fixtures/tags';
import BUILDS from '../fixtures/builds';
import RESOURCES from '../fixtures/resources';

// TODO(Renzo): Implement proper data fetching once backend is setup

export function fetchUsers() {
  return axios.get(`${BASE_LOCAL}/get-users`);
}

export function fetchTags() {
  return axios.get(`${BASE_LOCAL}/get-tags`);
}

export function fetchResources() {
  return axios.get(`${BASE_LOCAL}/get-resources`);
}

export function fetchBuilds() {
  return axios.get(`${BASE_LOCAL}/get-builds`);
}
