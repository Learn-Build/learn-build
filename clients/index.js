import USERS from '../fixtures/users';
import TAGS from '../fixtures/tags';
import BUILDS from '../fixtures/builds';

// TODO(Renzo): Implement proper data fetching once backend is setup

export function fetchUsers() {
  return new Promise((resolve) => {
    resolve(USERS);
  });
}

export function fetchTags() {
  return new Promise((resolve) => {
    resolve(TAGS);
  });
}

export function fetchBuilds() {
  return new Promise((resolve) => {
    resolve(BUILDS);
  });
}
