
import * as path from 'path';
import { Configuration } from 'webpack';

class Folder {
  public Work: string;
  public Src: string;
  public Dist: string;
  public Modules: string;
  constructor(
    public Root: string
    ) {
    this.Work = Root;
    this.Src = path.join(this.Work, 'src');
    this.Dist = path.join(this.Work, 'dist');
    this.Modules = path.join(this.Work, 'node_modules');
  }
}
export let folder: Folder = new Folder(process.cwd());

export let config = <Configuration>{
  target: 'node',
  entry: {
    'index': folder.Src,
  },
  output: {
    path: folder.Dist,
    filename: 'index.js',
    chunkFilename: '[id].chunk.js',
  },
  resolve: {
    extensions: [ '.js', '.ts' ],
    alias: {
      '@modules': path.join(folder.Root, 'modules'),
      'modules': path.join(folder.Src, 'modules'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      },
    ]
  },
};
