export default class FriendFinder {

  constructor(socialNetworkService) {
    this.sns = socialNetworkService;
  }

  findPath(start, end, degreesOfSeparation) {
    let friends = this.sns.findFriends(start);
    let connPath = [start, friends[0]];
    let isSearching = true;
    let i = 0;

    while (isSearching) {
      const newFriends = this.sns.findFriends(friends[i]);
      const uniqueFriends = newFriends.filter(element => {
        return connPath.indexOf(element) === -1
      });


      connPath = connPath.concat(uniqueFriends);
      friends = friends.concat(uniqueFriends);
      i++;

      if (connPath.indexOf(end) !== -1) {
        isSearching = false;
      }
    }

    return connPath;
  }

  findConnectionPath(personAId, personZId, degreesOfSeparation) {

    const path1 = this.findPath(personAId, personZId, degreesOfSeparation);
    const path2 = this.findPath(personZId, personAId, degreesOfSeparation).reverse();

    const result = (path1.length < path2.length) ? path1 : path2;
    return result;

  }

}