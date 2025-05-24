'use strict';

const table = document.querySelector('table');

const tr = table.querySelectorAll('tr');

for (let i = 0; i < tr.length; i++) {
  const td = document.createElement('td');

  td.textContent = tr[i].children[1].textContent;

  tr[i].insertBefore(td, tr[i].children[tr[i].children.length - 1]);
}
