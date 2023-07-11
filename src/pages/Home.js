import { Lightning } from '@lightningjs/sdk'
import { MoviePoster } from '../components/MoviePoster';
import { movies } from '../services/movie.service';

/**
 * Home Component
 *
 * Represents the home page of the Movie Catalogue.
 */
export default class Home extends Lightning.Component {
  /**
   * Defines the template structure of the component.
   *
   * @returns {Object} The component's template object.
   */
  static _template() {
    return {
      Background: {
        x: 0,
        y: 0,
        w: 1920,
        h: 1080,
        color: 0xff111111,
        rect: true,
      },
      Heading: {
        x: 750,
        y: 100,
        text: {
          text: 'Movie Catalogue',
          fontSize: 40,
          textColor: 0xffffffff,
        },
      },
      MovieList: {
        x: 50,
        y: 250,
      },      
    };
  }

  /**
   * Initializes the component.
   * Sets the initial selected index, creates movie posters, and updates the selection.
   */
  _init() {
    this._selectedIndex = 0;
    this._createMoviePosters();
    this._updateSelection();
  }

  /**
   * Creates the movie posters based on the movie data.
   */
  _createMoviePosters() {
    const moviePosters = movies.map((movie, index) => {
      const poster = this.stage.c({
        type: MoviePoster,
        movie,
      });
      poster.x = index * 220;
      return poster;
    });

    this.tag('MovieList').children = moviePosters;
  }

  /**
   * Updates the visual selection of movie posters based on the selected index.
   */
  _updateSelection() {
    const moviePosters = this.tag('MovieList').children;
    moviePosters.forEach((poster, index) => {
      poster.patch({
        smooth: {
          alpha: index === this._selectedIndex ? 1 : 0.5,
          scale: index === this._selectedIndex ? 1.2 : 1,
        },
      });
    });
  }

  /**
   * Handles the left arrow key press event.
   * Decreases the selected index and updates the visual selection.
   */
  _handleLeft() {
    if (this._selectedIndex > 0) {
      this._selectedIndex--;
      this._updateSelection();
    }
  }

  /**
   * Handles the right arrow key press event.
   * Increases the selected index and updates the visual selection.
   */
  _handleRight() {
    if (this._selectedIndex < movies.length - 1) {
      this._selectedIndex++;
      this._updateSelection();
    }
  }

  /**
   * Retrieves the active movie item.
   *
   * @returns {Object} The active movie item component.
   */
  getActiveItem() {
    return this.tag("MovieList").children[this._selectedIndex];
  }

  /**
   * Returns the focused component.
   *
   * @returns {Object} The focused component.
   */
  _getFocused() {
    return this.getActiveItem();
  }
  
}
