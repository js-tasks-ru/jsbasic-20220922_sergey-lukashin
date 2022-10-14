function makeFriendsList(friends) {
  let ul = document.createElement('UL');
  for (let el of friends) {
    let li = document.createElement('LI');
    li.innerHTML = `${el.firstName} ${el.lastName}`;
    ul.appendChild(li);
  }
  return ul;
}
