//Como hice que pueda buscar cadenas con espacios, necesita como mínimo un indicador

const fs = require('fs');

const args = process.argv.slice(2);

let arg_n = false;
let arg_l = false;
let arg_i = false;
let arg_v = false;
let arg_x = false;

let cadena = "";
let i = 0;
for (let arg of args) {
  if (arg[0] === "-") {
    break;
  }
  cadena += arg + " ";
  i += 1;
}
cadena = cadena.slice(0, -1);
args.splice(0, i);
i = 0;
for (let arg of args) {
  if (arg === "-n") {
    arg_n = true;
  } else if (arg === "-l") {
    arg_l = true;
  } else if (arg === "-i") {
    arg_i = true;
  } else if (arg === "-v") {
    arg_v = true;
  } else if (arg === "-x") {
    arg_x = true;
  } else if (arg[0] === "-") {
    console.log(`grep: -'${arg[1]}' no existe`);
    process.exit();
  } else {
    break;
  }
  i += 1;
}

const files = args.splice(i);
if (!files || files.length === 0) {
  console.log("grep: falta un argumento de fichero");
  process.exit();
}

let name_file = false;
if (files.length > 1) {
  name_file = true;
}

const files_l = {};
for (let file of files) {
  if (!fs.existsSync(file)) {
    console.log(`grep: ${file} no es un fichero`);
    process.exit();
  }
  const actual_file = fs.readFileSync(file, 'utf-8');
  const lines = actual_file.split('\n');
  let number_line = 0;
  
  for (let line of lines) {
    number_line += 1;
    if (arg_i) {
      line = line.toLowerCase();
      cadena = cadena.toLowerCase();
    }
    if (arg_l && arg_v) {
      if (!line.match(new RegExp(cadena))) {
        files_l[file] = true;
      }
      continue;
    } else if (arg_l && !arg_v) {
      if (line.match(new RegExp(cadena))) {
        files_l[file] = true;
      }
      continue;
    }
    if (arg_x && !arg_v) {
      if (line === cadena) {
        if (arg_n) {
          if (name_file) {
            console.log(`${file} ${number_line}:${line}`);
          } else {
            console.log(`${number_line}:${line}`);
          }
        } else {
          if (name_file) {
            console.log(`${file}:${line}`);
          } else {
            console.log(line);
          }
        }
      }
      continue;
    } else if (arg_x && arg_v) {
      if (line !== cadena) {
        if (arg_n) {
          if (name_file) {
            console.log(`${file} ${number_line}:${line}`);
          } else {
            console.log(`${number_line}:${line}`);
          }
        } else {
          if (name_file) {
            console.log(`${file}:${line}`);
          } else {
            console.log(line);
          }
        }
      }
      continue;
    }
    if (arg_v) {
      if (!line.match(new RegExp(cadena))) {
        if (arg_n) {
          if (name_file) {
            console.log(`${file} ${number_line}:${line}`);
          } else {
            console.log(`${number_line}:${line}`);
          }
        } else {
          if (name_file) {
            console.log(`${file}:${line}`);
          } else {
            console.log(line);
          }
        }
      }
      continue;
    }
    if (line.match(new RegExp(cadena))) {
      if (arg_n) {
        if (name_file) {
          console.log(`${file} ${number_line}:${line}`);
        } else {
          console.log(`${number_line}:${line}`);
        }
      } else {
        if (name_file) {
          console.log(`${file}:${line}`);
        } else {
          console.log(line);
        }
      }
      continue;
    }
  }
}

if (arg_l) {
  for (let file in files_l) {
    console.log(file);
  }
}
