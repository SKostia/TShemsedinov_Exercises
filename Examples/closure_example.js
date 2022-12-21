'use strict';

// closure declarative function
{
  // eslint-disable-next-line no-inner-declarations
  function add(x) {
    function closure(y) {
      const z = x + y;
      console.log(`${x} + ${y} = ${z}`);
      return z;
    }
    return closure;
  }

  const result = add(3)(5);
  console.log(result);
}

console.log();
//closure arrow function
{
  const add = x => y => {
    const z = x + y;
    console.log(`${x} + ${y} = ${z}`);
    return z;
  };

  const result = add(3)(5);
  console.log(result);
}

console.log();
//closure example but more real
{ const logger = kind => {
  const colors = {
    warning: '\x1b[1;33m',
    error: '\x1b[0;31m',
    info: '\x1b[0:37m',
  };

  const color = colors[kind] || colors.info;
  return s => {
    const date = new Date().toISOString();
    console.log(color + date + '\t' + s);
  };
};

const warning = logger('warning');
const error = logger('error');
const slow = logger('slow');

warning('Hello');
error('world');
slow('Slow logger');
}

//trying to rewrite it on my own
{
  const logger = kind => {
    const colors = {
      warning: '\x1b[1;33m',
      error: '\x1b[0;31m',
      info: '\x1b[0:37m',
    };

    const color = colors[kind] || colors.info;
    return s => {
      const date = new Date().toISOString();
      console.log(color + date + '\t' + s);
    };
  };
  const warning = logger('warning');
  const error = logger('error');
  const slow = logger('slow');

  warning('Hello');
  error('world');
  slow('Slow logger');
  logger()('Something else');
}

//one more key generation closure function  example
{
  const generateKey = alphabet => {
    const max = alphabet.length;
    return length => {
      let key = '';
      for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * max);
        key += alphabet[index];
      }
      return key;
    };

  };

  const chars = 'abcdefghklmnopqrstuvwxyz';
  const generatePassword = generateKey(chars);
  const password = generatePassword(12);

  console.log({ password });
}
