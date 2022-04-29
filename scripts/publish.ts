import path from 'path';
import * as shelljs from 'shelljs';
import { program } from 'commander';

const targetFile = path.resolve(__dirname, '../dist/package.json');
// eslint-disable-next-line import/no-dynamic-require
const packagejson = require(targetFile);
const currentVersion = packagejson.version as string;
const versionList = currentVersion.split('.');
const [mainVersion, subVersion, phaseVersion] = versionList;

const defaultVersion = `${mainVersion}.${subVersion}.${Number(phaseVersion) + 1}`;

program.option('-v, --versions <version>', 'specify the release version manually', defaultVersion);

program.parse(process.argv);

const newVersion = program.getOptionValue('versions');

(function publish() {
  shelljs.sed('-i', `"version": "${currentVersion}"`, `"version": "${newVersion}"`, targetFile);
  shelljs.cd('dist');
  shelljs.exec('npm publish');
}());
