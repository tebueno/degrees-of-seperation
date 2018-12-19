export default class SocialNetworkServiceImpl  {

  constructor() {
    this.relationships = {};
  }

  findFriends(personId) {
    return this.relationships[personId];
  }

  addPerson(personId) {
    this.relationships[personId] = [];

  }

  addFriend(personId, friendId) {
    if (!this.relationships[personId]) {
      this.addPerson(personId);
    }

    if (!this.relationships[friendId]) {
      this.addPerson(friendId);
    }

    this.relationships[personId].push(friendId);
    this.relationships[friendId].push(personId);
  }

}