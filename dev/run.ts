
import * as child_process from 'child_process';
import * as webpack from 'webpack';
import { config, folder } from './webpack.config';

let compiler = webpack(config);
let p: child_process.ChildProcess;

compiler.run((_err, _stats) => {
  if (_err) {
    console.error(_err);
    return;
  }
  console.log(_stats.toString({
    chunks: false, /// Поменьше информации.
    colors: true
  }));
  p = child_process.fork(folder.Dist);
});
