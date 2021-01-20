const xhrDataTitle = new XMLHttpRequest();
let methodTitle = 'GET';
let endpoint = '/title';
xhrDataTitle.open(methodTitle, endpoint);
xhrDataTitle.send();

xhrDataTitle.onload = () => {
  const data = JSON.parse(xhrDataTitle.response);
  //console.log(data);

  let list = document.querySelector('div');

  for (let i = 0; i < data.length; i++) {
    let book = document.createElement('li');
    book.innerText = `${data[i].book_name}`;
    list.appendChild(book);
  }
};

const xhrData = new XMLHttpRequest();
let methodData = 'GET';
let endpointData = '/data';
xhrData.open(methodData, endpointData);
xhrData.send();

xhrData.onload = () => {
  const dataData = JSON.parse(xhrData.response);
  //console.log(dataData);

  let list = document.querySelector('table');
  
  let tableHead = document.createElement('tr');
  tableHead.innerHTML = "<th>Title</th> <th>Author</th> <th>Category</th> <th>Publisher</th> <th>Price</th>";
  list.appendChild(tableHead);

  for (let i = 0; i < dataData.length; i++) {
    let book = document.createElement('tr');
    book.innerHTML = `<td>${dataData[i].book_name}</td> <td>${dataData[i].aut_name}</td> <td>${dataData[i].cate_descrip}</td> <td>${dataData[i].pub_name}</td> <td>${dataData[i].book_price}</td>`;
    list.appendChild(book);
  }
};
