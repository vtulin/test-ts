
import * as webpack from 'webpack';
import { config, folder } from './webpack.config';

let compiler = webpack(config);

compiler.run((_err, _stats) => {
  if (_err) {
    console.error(_err);
    return;
  }
  console.log(_stats.toString({
    chunks: false, /// Поменьше информации.
    colors: true
  }));
});
