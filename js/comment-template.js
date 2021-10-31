const fillCommentTemplate = (parent, object) => {
  const template = `<li class="social__comment">
    <img class="social__picture" src=${object.avatar} alt="${object.name}" width="35" height="35">
    <p class="social__text">${object.message}</p>
    </li>`;
  parent.insertAdjacentHTML('beforeend', template);
};

export {fillCommentTemplate};
