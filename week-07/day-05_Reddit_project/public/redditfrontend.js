'use strict';

document.addEventListener('DOMContentLoaded', () => {
  loadAllposts();
});

window.addEventListener('load', () => {
  setUpvote();
  setDownvote();
  setRemove();
});
