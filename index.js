// Копируем буфер в эксель-формате

let count = 0;

const res = [...document.getElementsByClassName('project-column')].reverse().map(column => {
    const columnName = column.getElementsByClassName('js-project-column-name')[0].innerText;
    const cards = [...column.getElementsByClassName('issue-card')];

    const links = cards.map(card => {
        ++count;
        const linkTag = card.getElementsByClassName('js-project-card-issue-link')[0];

        const link = window.location.origin + linkTag.getAttribute('href');
        const text = linkTag.innerText;
        let executor = '';

        if (card.getElementsByClassName('avatar-user')[0]) {
            executor = card.getElementsByClassName('avatar-user')[0].getAttribute('alt');
        }

        return [text, executor, columnName, link].join('\t');
    });

    return links;
}).flat().join('\n')

copy(res);

console.log('Всего задач:', count);
