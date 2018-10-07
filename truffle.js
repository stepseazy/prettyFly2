module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    // ropsten: {
    //   host: "localhost",
    //   port: 8545,
    //   network_id: 3,
    //   gas: 4700000
    // },
    kovan: {
      host: "127.0.0.1",
      port: 8545,
      network_id: 42,
      gas: 4700000
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    rpc: {
      host: "localhost",
      post: 8080
    }
    // ,
    // ropsten: {
    //   provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/"+infura_apikey),
    //   network_id: 3
    // }
  }
};
