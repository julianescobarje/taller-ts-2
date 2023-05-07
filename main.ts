import { series } from './data.js';

const table = document.querySelector('tbody');

if (!table) {
  throw new Error('No table found');
}

let seasonsSum = 0;

series.forEach((serie) => {
  const row = document.createElement('tr');
  const idCell = document.createElement('th');
  const nameCell = document.createElement('td');
  const channelCell = document.createElement('td');
  const seasonsCell = document.createElement('td');

  row.classList.add('table-active');

  idCell.textContent = serie.id.toString();
  channelCell.textContent = serie.channel;
  seasonsCell.textContent = serie.seasons.toString();

  const link = document.createElement('a');
  link.href = serie.link;
  link.classList.add('text-decoration-none');
  link.textContent = serie.name;
  nameCell.appendChild(link);

  row.appendChild(idCell);
  row.appendChild(nameCell);
  row.appendChild(channelCell);
  row.appendChild(seasonsCell);

  table.appendChild(row);

  seasonsSum += serie.seasons;
});

const span = document.querySelector('caption span');

if (!span) {
  throw new Error('No span found');
}

const averageSeasons = seasonsSum / series.length;

span.textContent = averageSeasons.toString();
