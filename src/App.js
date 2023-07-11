import { Router, Lightning, Utils } from '@lightningjs/sdk'
import routes from './routes';

export default class App extends Router.App {
  static getFonts() {
    return [{ family: 'Regular', url: Utils.asset('fonts/Roboto-Regular.ttf') }]
  }

  static _template() {
    return {
      Pages: {
        w: 1920,
        h: 1080,
      },
    };
  }

  _setup() {
    Router.startRouter(routes);
  }
}
