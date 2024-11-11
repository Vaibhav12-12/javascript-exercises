const getTheTitles = function(books) {
    let titles = [];
    for(let book of books) {
        titles.push(book.title);
    }
    return titles;
    // Can use map as well, titles = books.map(book => book.title);
};

// Do not edit below this line
module.exports = getTheTitles;
