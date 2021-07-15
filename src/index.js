import 'normalize.css';
import './theme/global.scss';

function importAll(r){
  r.keys().forEach(r);
}
importAll(require.context('./components', true, /\.js$/));
importAll(require.context('./pages', true, /\.js$/));
