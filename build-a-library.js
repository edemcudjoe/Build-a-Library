//Parent Class
class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._isCheckedOut;
    }
    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(status) {
        this._isCheckedOut = status; 
    }
    
    getAverageRating() {
        if (this._ratings.length > 0) {
            let average = (this._ratings.reduce((a, b) => a + b)) / this._ratings.length;
            return average;
        } else {
            return 'There are no ratings available.'
        }    
    }
    toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
    }
    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this._ratings.push(rating);
        } else {
            console.log('Rating input should be from 1 - 5');
        }    
    }
    
}

//Book Subclass
class Book extends Media {
    constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

//Movie Subclass
class Movie extends Media {
    constructor(director, title, runtime) {
        super(title);
        this._director = director;
        this._runtime = runtime;
    }

    get director() {
        return this._director;
    }
    get runtime() {
        return this._runtime;
    }
}

//CD Subclass
class CD extends Media {
    constructor(artist, title, songs) {
        super(title);
        this._artist = artist;
        this._songs = songs;
    }

    get artist() {
        return this._artist;
    }
    get songs() {
        return this._songs;
    }

    shuffle() {
        const shuffledSongs = [];

        for (let i = shuffledSongs.length; i < this._songs.length; i = shuffledSongs.length) {
            let randomIndex = Math.floor(Math.random() * this._songs.length);
            let tempSong = this._songs[randomIndex];
            if (shuffledSongs.includes(tempSong) === false) {
                shuffledSongs.push(tempSong);
            } 
        }
        return shuffledSongs;
    }
}


//creating book instance
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating());


//creating movie instance
const speed = new Movie('Jan de Bont', 'Speed', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

//creating CD instance
const mindControl = new CD('Stephen Marley', 'Mind Control', ['Mind Control', 'Hey Baby', 'Iron Bars', 'Fed Up', 'You\'re Gonna Leave', 'Chase Dem', 'Lonely Avenue']);
console.log(mindControl.songs)
console.log(mindControl.shuffle());