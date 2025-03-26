//Package Data Array
var data= [
    {
        name: 'Path Intellisense',
        description: 'Visual Studio Code plugin that autocompletes filenames.',
        author: 'Christian Kohler',
        downloads: 15743778,
        stars: 5000,
        selector: 'p1'
    },
    {
        name: 'CSS Peek',
        description: 'Allow peeking to CSS ID and class strings as definitions from HTML files to respective CSS.',
        author: 'Pranay Prakash',
        downloads: 68466333,
        stars: 3700,
        selector: 'p2'
    }
];

//Package Constructor Function
function Package(data) {
    this.name = data.name;
    this.description = data.description;
    this.author = data.author;
    this.downloads = data.downloads;
    this.stars = data.stars;
    this.selector = data.selector;

    this.getFormattedDownloads = function() {
        return this.downloads.toLocaleString();
    };

    this.getFormattedStars = function() {
        return this.stars.toLocaleString();
    };
}

var getTodaysDate = function() {
    var today = new Date();
    return today.toDateString();
};

var getElement = function(id) {
    return document.getElementById(id);
};

var writePackageInfo = function(package) {
    var selector = package.selector,
        nameElement = getElement(selector + '-name'),
        descriptionElement = getElement(selector + '-description'),
        authorElement = getElement(selector + '-author'),
        downloadsElement = getElement(selector + '-downloads'),
        starsElement = getElement(selector + '-stars');

        nameElement.textContent = package.name;
        descriptionElement.textContent = package.description;
        authorElement.textContent = package.author;
        downloadsElement.textContent = package.getFormattedDownloads();
        starsElement.textContent = package.getFormattedStars();
};

var init = function() {
    dateElement = getElement('date');
    dateElement.textContent = getTodaysDate();

    var emmet = new Package(data[0]);
    writePackageInfo(emmet);

    var beautify = new Package(data[1]);
    writePackageInfo(beautify);
}

init();