import { suma, multiplica } from './modulos/controller.mjs'
import chalk from 'chalk';

const sum = suma(1,2);
console.log(chalk.green(sum));

const mult = multiplica(4,5);
console.log(chalk.green(mult));