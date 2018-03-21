import idb from 'idb';

export function createDB() {
  if (!('indexedDB' in window)) return;
  idb.open('showcase', 1, upgradeDb => {
    switch (upgradeDb.oldVersion) {
      case 0:
      case 1:
        upgradeDb.createObjectStore('newContent', { keyPath: 'ref' });
        upgradeDb.transaction.objectStore('newContent')
          .createIndex('type', 'type', { unique: false })

        upgradeDb.createObjectStore('lastViewed', { keyPath: 'ref' });
        upgradeDb.transaction.objectStore('lastViewed')
          .createIndex('type', 'type', { unique: false })
        break;
      default:
    }
  });
}

export function saveData(data, table) {
  if (!('indexedDB' in window)) return;

  idb.open('showcase', 1).then(db => {
    const tx = db.transaction(table, 'readwrite');
    const store = tx.objectStore(table);

    return Promise.all(data.map(item =>
      store.add({
        ...item,
        ref: item.ref || `demo:${item.title.replace(/\s/, '')}`
      })
    ))
    .catch(e => {
      tx.abort();
      console.error(e);
    });
  });
}

export function getAll() {
  const dbPromise = idb.open('showcase', 1);
  return dbPromise.then(db =>
    db.transaction('lastViewed')
      .objectStore('lastViewed').getAll()
  );
}