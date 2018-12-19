import SocialNetworkServiceImpl from './SocialNetworkServiceImpl';
import FriendFinder from '../app/FriendFinder';

describe('Friend Finder Test', () => {

  it('find relationship path bonus question test', () => {

    const sns = new SocialNetworkServiceImpl();
    sns.addFriend('Kevin', 'UserB');
    sns.addFriend('Kevin', 'UserS');
    sns.addFriend('UserB', 'UserC');
    sns.addFriend('UserA', 'UserD');
    sns.addFriend('UserX', 'UserC');
    sns.addFriend('UserY', 'UserX');
    sns.addFriend('Bacon', 'UserY');

    const friendFinder = new FriendFinder(sns);

    expect(friendFinder.findConnectionPath('Kevin', 'Bacon', 5))
      .toEqual(['Kevin', 'UserB', 'UserC', 'UserX', 'UserY', 'Bacon']);

    sns.addFriend('UserS', 'Bacon');
    expect(friendFinder.findConnectionPath('Kevin', 'Bacon', 5))
      .toEqual(['Kevin', 'UserS', 'Bacon']);
  });
});