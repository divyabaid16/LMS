export const params = {
  user: {
    key: 'user',

    roles: {
      student: {
        key: 'student',
        name: 'student',
        access: ['user'],
      },
      instructor: {
        key: 'instructor',
        name: 'instructor',
        access: ['user'],
      },
    },
  },
}