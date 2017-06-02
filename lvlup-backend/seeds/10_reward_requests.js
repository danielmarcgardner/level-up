
exports.seed = function (knex, Promise) {
  return knex('reward_requests').del()
  .then(() => knex('reward_requests').insert([
    {
      id: 1,
      student_id: 2,
      cohort_id: 1,
      reward_id: 6,
      category_id: 1,
      status: 'Approved',
      notes: 'Looking forward to using this',
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',

    },
    {
      id: 2,
      student_id: 1,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Pending approval',
      notes: 'I would love to attend the next Community Meet and Eat',
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 3,
      student_id: 3,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Approved',
      created_at: '2017-04-01T10:00:00.000Z',
      updated_at: '2017-04-02T12:00:00.000Z',
    },
    {
      id: 4,
      student_id: 2,
      cohort_id: 1,
      reward_id: 1,
      category_id: 4,
      status: 'Approved',
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 5,
      student_id: 2,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Denied',
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 6,
      student_id: 1,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Denied',
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 7,
      student_id: 3,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Denied',
      created_at: '2017-02-01T10:00:00.000Z',
      updated_at: '2017-02-04T10:00:00.000Z',
    },
    {
      id: 8,
      student_id: 1,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Approved',
      notes: 'Nice Work',
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 9,
      student_id: 3,
      cohort_id: 1,
      reward_id: 1,
      category_id: 4,
      status: 'Approved',
      created_at: '2017-02-19T10:00:00.000Z',
      updated_at: '2017-02-20T10:00:00.000Z',
    },
    {
      id: 10,
      student_id: 1,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Approved',
      notes: 'Please contact me with the card design',
      created_at: '2017-04-01T10:00:00.000Z',
      updated_at: '2017-04-02T12:00:00.000Z',
    },
    {
      id: 11,
      student_id: 2,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Pending approval',
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 12,
      student_id: 3,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Pending approval',
      created_at: '2017-02-27T10:00:00.000Z',
      updated_at: '2017-02-28T11:00:00.000Z',
    },
    {
      id: 13,
      student_id: 1,
      cohort_id: 1,
      reward_id: 4,
      category_id: 4,
      status: 'Approved',
      created_at: '2017-04-25T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 14,
      student_id: 1,
      cohort_id: 1,
      reward_id: 6,
      category_id: 1,
      status: 'Pending approval',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 15,
      student_id: 2,
      cohort_id: 1,
      reward_id: 8,
      category_id: 3,
      status: 'Approved',
      notes: 'These will be great for networking!',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 16,
      student_id: 2,
      cohort_id: 1,
      reward_id: 5,
      category_id: 4,
      status: 'Pending approval',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 17,
      student_id: 3,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Approved',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 18,
      student_id: 3,
      cohort_id: 1,
      reward_id: 6,
      category_id: 1,
      status: 'Pending approval',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 19,
      student_id: 4,
      cohort_id: 1,
      reward_id: 1,
      category_id: 4,
      status: 'Approved',
      created_at: '2017-05-05T10:00:00.000Z',
      updated_at: '2017-05-26T11:00:00.000Z',
    },
    {
      id: 20,
      student_id: 4,
      cohort_id: 1,
      reward_id: 11,
      category_id: 3,
      status: 'Pending approval',
      notes: 'Would love to pair program with any instructor',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 21,
      student_id: 4,
      cohort_id: 1,
      reward_id: 6,
      category_id: 1,
      status: 'Pending approval',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
    {
      id: 22,
      student_id: 4,
      cohort_id: 1,
      reward_id: 7,
      category_id: 2,
      status: 'Pending approval',
      created_at: '2017-04-05T10:00:00.000Z',
      updated_at: '2017-04-26T11:00:00.000Z',
    },
  ]))
  .then(() => knex.raw('SELECT setval(\'reward_requests_id_seq\', (SELECT MAX(id) FROM reward_requests))'));
};
