angular.module('app')
  .factory('LikeService', LikeService);

LikeService.$inject = [];

function LikeService () {
  var service = {
    addLike
  };

  function addLike(postId) {
    var likes = getLikes();
    var existingLike = likes.find(i => i === postId);
    if (existingLike) {
      return false;
    } else {
      likes.push(postId);
      updateLikes(likes);
      return true;
    }
  }

  function getLikes() {
    var key = "rootedandwildblog";
    var likes = localStorage.getItem(key);
    if (likes) {
      return JSON.parse(likes);
    } else {
      localStorage.setItem(key, JSON.stringify([]));
      return [];
    }
  }

  function updateLikes(likes) {
    var key = "rootedandwildblog";
    localStorage.setItem(key, JSON.stringify(likes));
  }

  return service
}
