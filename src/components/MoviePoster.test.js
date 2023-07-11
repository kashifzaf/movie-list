import { MoviePoster } from './MoviePoster';

describe('MoviePoster', () => {
  let moviePoster;

  beforeEach(() => {
    moviePoster = new MoviePoster();
  });

  it('should set the movie and update the poster image source', () => {
    const movie = {
      title: 'Movie Title',
      year: 2021,
      rating: 8.5,
      image: 'poster.jpg',
    };

    moviePoster.movie = movie;

    expect(moviePoster.tag('PosterImage').src).toEqual('images/poster.jpg');
  });

  it('should update the text elements when focused', () => {
    const movie = {
      title: 'Movie Title',
      year: 2021,
      rating: 8.5,
    };

    moviePoster.movie = movie;
    moviePoster._focus();

    expect(moviePoster.tag('Title').text.text).toEqual('Movie Title');
    expect(moviePoster.tag('Year').text.text).toEqual('Year: 2021');
    expect(moviePoster.tag('Rating').text.text).toEqual('Rating: 8.5');
  });

  it('should clear the text elements when unfocused', () => {
    const movie = {
      title: 'Movie Title',
      year: 2021,
      rating: 8.5,
    };

    moviePoster.movie = movie;
    moviePoster._focus();
    moviePoster._unfocus();

    expect(moviePoster.tag('Title').text.text).toEqual('');
    expect(moviePoster.tag('Year').text.text).toEqual('');
    expect(moviePoster.tag('Rating').text.text).toEqual('');
  });
});
