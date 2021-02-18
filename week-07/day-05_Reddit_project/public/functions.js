loadAllposts = () => {
  fetch('/post')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('nincs valasz');
      }
      return response;
    })
    .then((response) => response.json())
    .then((response) => {
      response.forEach((element) => {
        document
          .querySelector('#mainContainer')
          .appendChild(createPost(element));
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

createPost = (element) => {
  let post = document.createElement('div');
  post.innerHTML = `<div class="postContainer" id="post${element.post_id}">
  <button class="buttUp" id="${element.post_id}"></button>
  <button class="buttDown" id="${element.post_id}"></button>
  <div id="score${element.post_id}" class="score">${element.score}</div>
  <div id="title${element.post_id}" class="title">${element.title}</div>
  <div id="content${element.post_id}" class="content"><a href="${element.url}" target="_blank" rel="noopener noreferrer">${element.url}</a></div>
  <div class="links">
  <button class="modify" id="${element.post_id}">Modify</button>
  <button class="remove" id="${element.post_id}">Remove</button>
  </div>
</div>`;
  return post;
};

setUpvote = () => {
  let upvote = document.querySelectorAll('.buttUp');
  upvote.forEach((element) => {
    element.addEventListener('click', (e) => {
      console.log(e.target.parentElement);
      console.log(upvote);

      fetch(`/post/${e.target.id}/upvote`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('nincs valasz');
          }
          return response;
        })
        .then((response) => response.json())
        .then((response) => {
          document.querySelector(`#score${e.target.id}`).innerHTML =
            response[0].score;
        });
      e.target.classList.add('used');
      e.target.disabled = true;
    });
  });
};

setDownvote = () => {
  let downvote = document.querySelectorAll('.buttDown');
  downvote.forEach((element) => {
    element.addEventListener('click', (e) => {
      let score = document.querySelector(`#score${e.target.id}`);
      console.log(e.target.id);
      console.log(downvote);

      if (parseInt(score.innerText) > 0) {
        fetch(`/post/${e.target.id}/downvote`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error('nincs valasz');
            }
            return response;
          })
          .then((response) => response.json())
          .then((response) => {
            document.querySelector(`#score${e.target.id}`).innerHTML =
              response[0].score;
          });
        e.target.classList.add('used');
        e.target.disabled = true;
      }
    });
  });
};

setRemove = () => {
  let remove = document.querySelectorAll('.remove');
  remove.forEach((element) => {
    element.addEventListener('click', (e) => {
      console.log(e.target.id);
      fetch(`/post/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('nincs valasz');
          }
          return response;
        })
        .then((response) => response.json())
        .then((response) => {
          console.log(response[0].post_id);
          document
            .querySelector(`#post${response[0].post_id}`)
            .parentElement.remove();
        });
    });
  });
};
