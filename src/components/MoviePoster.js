import { Lightning, Utils } from '@lightningjs/sdk'

/**
 * MoviePoster Component
 *
 * Represents a movie poster with title, year, and rating information.
 */
export class MoviePoster extends Lightning.Component {
  /**
   * Defines the template structure of the component.
   *
   * @returns {Object} The component's template object.
   */
  static _template() {
    return {
      rect: true,
      color: 0xff333333,
      w: 200,
      h: 300,
      PosterImage: {
        mount: 0.5,
        x: 100,
        y: 150,
        w: 160,
        h: 240,
      },
      Title: {
        x:10,
        y: 320,
        text: {
          text: '',
          fontSize: 18,
          textColor: 0xffffffff,
        },
      },
      Year: {
        x:10,
        y: 350,
        text: {
          text: '',
          fontSize: 14,
          textColor: 0xffffffff,
        },
      },
      Rating: {
        x:10,
        y: 380,
        text: {
          text: '',
          fontSize: 14,
          textColor: 0xffffffff,
        },
      },
    };
  }

  /**
   * Sets the movie data for the component.
   *
   * @param {Object} movie - The movie object containing title, year, rating, and image information.
   */
  set movie(movie) {
    this._movie = movie;
    this.tag('PosterImage').src = Utils.asset(`images/${movie.image}`);
  }

  /**
   * Handles the focus event for the component.
   * Updates the title, year, and rating text based on the movie data.
   */
  _focus() {
    this.tag('Title').text.text = this._movie.title;
    this.tag('Year').text.text = `Year: ${this._movie.year}`;
    this.tag('Rating').text.text = `Rating: ${this._movie.rating}`;
  }

  /**
   * Handles the unfocus event for the component.
   * Clears the title, year, and rating text.
   */
  _unfocus() {
    this.tag('Title').text.text = '';
    this.tag('Year').text.text = '';
    this.tag('Rating').text.text = '';
  }
}
