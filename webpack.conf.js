const validEnvironments = [
  'prod',
  'dev'
]

if (!process.env.NODE_ENV || !validEnvironments.includes(process.env.NODE_ENV)) {
  process.env.NODE_ENV = 'dev';
}

module.exports = function () { 
  return require(`./build/webpack.${process.env.NODE_ENV}.js`);
};
