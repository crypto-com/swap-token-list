const { version } = require('../package.json');
const mainnet = require('./tokens/mainnet.json');
const ropsten = require('./tokens/ropsten.json');
const rinkeby = require('./tokens/rinkeby.json');
const goerli = require('./tokens/goerli.json');
const kovan = require('./tokens/kovan.json');

function buildList(list) {
  const parsed = version.split('.');
  return {
    'name': 'Swap Token List',
    'timestamp': (new Date().toISOString()),
    'version': {
      'major': +parsed[ 0 ],
      'minor': +parsed[ 1 ],
      'patch': +parsed[ 2 ]
    },
    'tags': {},
    'logoURI': 'https://dnkplacumu1sr.cloudfront.net/crypto_com_logo.svg',
    'keywords': [
      'cro',
      'defi',
      'swap'
    ],
    tokens: list
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      })
  };
};

module.exports.buildMainnetList = function buildMainnetList() {
  return buildList(mainnet);
}

module.exports.buildRopstenList = function buildRopstenList() {
  return buildList(ropsten);
}