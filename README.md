# zkMask-subgraph

Goerli deployment: [https://thegraph.com/hosted-service/subgraph/richa-iitr/zkmask](https://thegraph.com/hosted-service/subgraph/richa-iitr/zkmask)  <br>

Query Structure <br>
```{
  authenticationCompleteds(first: 1000, where: {user: "0x4918b3a9b6767B7C632F536AC8853fCc511Bb2fD"}) {
    id
    success
    user
    txId
    contract
    value
    methodId
    txTimestamp
    txBlockNumber
    transactionHash
    
  }
}```
