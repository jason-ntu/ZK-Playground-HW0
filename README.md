# ZK-Playground-HW0

This is just a tool for solving [2023 ZK playgound hw0](https://hackmd.io/@ChiHaoLu/zkplayground2-hw0)

node version: v18.16.0

1. `npm install`

2. `npx hardhat compile`

3. `npx hardhat test`

The merkle tree with 10 leaves looks like this:

```
0x8735337152167feec443ede60bd7cf19e2057acaf7be9617551b10abac7cc544
├─ 0x6cd8346bc96059f539e415d0001352d9f789b4c88af4ff242e7b13b3771f0634
│  ├─ 0x32bdf46d0b18fb92071d2b7aa914115ef6202abd62fba94a0978ffff854e2f26
│  │  ├─ 0x5034c7bc87d43fbcb5725f546a9bbc7f9916dc73464b2317c11318218368e72d
│  │  │  ├─ 0x760785a457f46af4582b62962c4d96be98c68df9619556fa20af3c286343bf81
│  │  │  └─ 0xcc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e9
│  │  └─ 0x6cba9ea971cd36a1100bbe94d254d62109b18a1eb3714c80fbbcc9ffef369744
│  │     ├─ 0xe17c03649ba03da9751f3150c04fe0cfb9db3638a470502195aa9d2e92a72eeb
│  │     └─ 0xfbe29ffff2df756f5206d1bed907b27d257c4f3817de02ab09e620f61ebdb8ae
│  └─ 0x1970fd3f2368dcb865dcb5b9114974e721fc396397503ac3aec52b594c8caf2d
│     ├─ 0x6c660219b4d982a5f658c43706851713a03a45cb8b077b7ec631e28567a266c3
│     │  ├─ 0xfcddce24aa814fcae0054e69eb9a880817ecd7fac7121bd17e5c640cdad1e1bf
│     │  └─ 0x2606e24a918d1226ad408a6552c50a3ba3e47eaf26ca168da2f72d43b0e58d7d
│     └─ 0x6e675716351df34e3620d506cf327168e4fff8d19dcaa8fd98a97ead3ec79c66
│        ├─ 0x777bf5422e6c21b7feec8203b45bf1ae070d7df86a205b56d6ad8fa7bc5aadf4
│        └─ 0x365be737c7ed4a84a1f9c498dabb5055556922703ec22dc3116c5dbb97b4addf
└─ 0x48e40f6315e524c119b977fa35981dbdc77f77a902637ce4f4ac173a8bf497d1
    └─ 0x48e40f6315e524c119b977fa35981dbdc77f77a902637ce4f4ac173a8bf497d1
        └─ 0x48e40f6315e524c119b977fa35981dbdc77f77a902637ce4f4ac173a8bf497d1
         ├─ 0xa1b51e6700c38a95f12ae933d044ecb403e95f269a307632d1f0359dc27f4a95
         └─ 0x6e74da3eb07d6ffbb92dca5cdbb16c24c9c351793062108c06574cb2fb1c6786
```

References:
- [Interact With Your Smart Contract](https://www.web3.university/tracks/create-a-smart-contract/interact-with-your-smart-contract)
- [How to send ETH and transfer ERC20 token with ethersJs](https://www.youtube.com/watch?v=c8Pkz1NqWNw&ab_channel=CodeWithJoe)
- [merkletreejs](https://github.com/merkletreejs/merkletreejs#Getting-started)
- [Merkle Generator and Prover in Solidity](https://github.com/dmfxyz/murky)