// addToDB = obj => {
//   let request = window.indexedDB.open("todoDB", 1),
//     db,
//     tx,
//     store;

//   request.onupgradeneeded = function(e) {
//     let db = request.result,
//       store = db.createObjectStore("todoStore");
//   };
//   request.onerror = function(e) {
//     console.log("request error -> " + e.target.errorCode);
//   };
//   request.onsuccess = function(e) {
//     db = request.result;
//     tx = db.transaction("todoStore", "readwrite");
//     store = tx.objectStore("todoStore");
//     store.put(obj);
//   };

//   tx.oncomplete = function() {
//     db.close();
//   };
// };

// getAllData = function() {
//   let request = window.indexedDB.open("todoDB", 1),
//     db,
//     tx,
//     store;

//   allData = [];
//   request.onupgradeneeded = function(e) {
//     let db = request.result,
//       store = db.createObjectStore("todoStore");
//   };
//   request.onerror = function(e) {
//     console.log("request error -> " + e.target.errorCode);
//   };
//   request.onsuccess = function(e) {
//     db = request.result;
//     tx = db.transaction("todoStore", "readwrite");
//     store = tx.objectStore("todoStore");
//     it = store.openCursor();
//     it.onerror = function(e) {};
//     it.onsuccess = function(e) {
//       let cursor = e.target.result;
//       if (cursor) {
//         allData = [
//           ...allData,
//           {
//             id: cursor.id,
//             title: cursor.title,
//             completed: cursor.completed
//           }
//         ];
//         cursor.continue();
//       }
//     };
//     return allData;
//   };

//   tx.oncomplete = function() {
//     db.close();
//   };
// };

// export default dbServices;
