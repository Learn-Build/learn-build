import { USERS } from './constants/users';
import { TAGS } from './constants/tags';
import { BUILDS } from './constants/builds';

// TODO(Renzo): Implement proper data fetching once backend is setup

export function fetchUsers() {
  return new Promise((resolve, reject) => {
    resolve(USERS);
  });
};

export function fetchTags() {
  return new Promise((resolve, reject) => {
    resolve(TAGS);
  });
}

export function fetchBuilds() {
  return new Promise((resolve, reject) => {
    resolve(BUILDS);
  });
}
