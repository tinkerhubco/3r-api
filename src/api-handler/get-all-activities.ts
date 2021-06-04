import { NextApiHandler } from 'next';

import { database } from '../lib/database';

export const getAllActivities: NextApiHandler = async (req, res) => {
  // await database.connect();

  // const rewards = await RewardsModel.find();
  const mockData = [
    {
      upcoming: [
        {
          _id: '1',
          title: 'Upcoming activity 1',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '2',
          title: 'Upcoming activity 2',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: false,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '3',
          title: 'Upcoming activity 3',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '4',
          title: 'Upcoming activity 4',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: false,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '5',
          title: 'Upcoming activity 5',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
      ],
      trending: [
        {
          _id: '1',
          title: 'Trending activity 1',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '2',
          title: 'Trending activity 2',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: false,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '3',
          title: 'Trending activity 3',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '4',
          title: 'Trending activity 4',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: false,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
        {
          _id: '5',
          title: 'Trending activity 5',
          about:
            'Donut cake I love gingerbread icing gummies danish sugar plum. Topping sweet pie marshmallow I love jelly-o muffin cake. Sweet roll lollipop tart carrot cake halvah lollipop.',
          mechanics:
            'Biscuit tart bonbon. Chocolate cake soufflé pudding jelly beans. Pudding pudding dragée jelly beans biscuit marzipan cookie sweet roll. Carrot cake sweet chocolate cake I love chocolate.',
          rewardPoints: 30,
          location: 'Highway Hills, Mandaluyong',
          organizer: {
            name: 'The Plaf',
            avatarUrl: 'https://placekitten.com/200/300',
          },
          coverPhotoUrl: 'https://placekitten.com/200/300',
          participantsCount: 99,
          hasJoined: true,
          earnedPoints: 30,
          maxAttemptsCount: 6,
          attemptsCount: 1,
          startDate: '2021-06-23T18:25:43.511Z',
          endDate: '2012-08-23T18:25:43.511Z',
          scheduleTime: '6:00 AM - 9:00 PM',
        },
      ],
    },
  ];

  return res.send(mockData);
};
