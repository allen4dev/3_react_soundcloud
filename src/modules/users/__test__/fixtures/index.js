import v4 from 'uuid';

const fixtures = {
  getUser() {
    return {
      id: v4(),
      username: 'a random username',
      avatar_url: `http://i1.sndcdn.com/avatars-large.jpg?${v4()}`,
      full_name: 'Some full name',
      description: 'A random description from a random user',
    };
  },

  getUsers(n) {
    let users = {};
    /* eslint-disable */
    while (n-- > 0) {
      /* eslint-enable */
      const newUser = this.getUser();
      users = { ...users, [newUser.id]: newUser };
    }

    return users;
  },
};

export default fixtures;
