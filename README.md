# ZK-Playground-HW0

This is just a tool for solving [2023 ZK playgound hw0](https://hackmd.io/@ChiHaoLu/zkplayground2-hw0)

node version: v18.16.0

1. `npm install`

2. `npx hardhat compile`

3. `npx hardhat test`

The merkle tree with 10 leaves looks like this:

```
└─ 8d798c5764a164492f1c8850246fdd11750bd2bffd8f42356150ae85a2b5469e
   ├─ 6b9495c453ad7611c0024d9245afbfa3679dc34ebfb02663c590cb85b4ad2d9a
   │  ├─ 32bdf46d0b18fb92071d2b7aa914115ef6202abd62fba94a0978ffff854e2f26
   │  │  ├─ 5034c7bc87d43fbcb5725f546a9bbc7f9916dc73464b2317c11318218368e72d
   │  │  │  ├─ 760785a457f46af4582b62962c4d96be98c68df9619556fa20af3c286343bf81
   │  │  │  └─ cc61ebc064488ecc9c6aa0138875f527fe4033a5b0fb9a1acf9d48f8809a82e9
   │  │  └─ 6cba9ea971cd36a1100bbe94d254d62109b18a1eb3714c80fbbcc9ffef369744
   │  │     ├─ e17c03649ba03da9751f3150c04fe0cfb9db3638a470502195aa9d2e92a72eeb
   │  │     └─ fbe29ffff2df756f5206d1bed907b27d257c4f3817de02ab09e620f61ebdb8ae
   │  └─ 40ef6049493657f0558c92f1f64806570ebba9e20cd40eb1385d8c61b3c523c7
   │     ├─ 0eadfce2fedeb052f1852bb057c44a6a023d3d387b4187a89947470f2d686f53
   │     │  ├─ fcddce24aa814fcae0054e69eb9a880817ecd7fac7121bd17e5c640cdad1e1bf
   │     │  └─ 2606e24a918d1226ad408a6552c50a3ba3e47eaf26ca168da2f72d43b0e58d7d
   │     └─ ec809f5605ff290e79ad9ab3a8d28f16fd2a227392e48a79eaa00cbd247b3bc0
   │        ├─ 777bf5422e6c21b7feec8203b45bf1ae070d7df86a205b56d6ad8fa7bc5aadf4
   │        └─ 365be737c7ed4a84a1f9c498dabb5055556922703ec22dc3116c5dbb97b4addf
   └─ a7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6
      └─ a7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6
         └─ a7a7ef787c98fd4abfa510e07a146c11dbfcc93e6a316a41cb57f0dfa2b4cbd6
            ├─ a1b51e6700c38a95f12ae933d044ecb403e95f269a307632d1f0359dc27f4a95
            └─ 6e74da3eb07d6ffbb92dca5cdbb16c24c9c351793062108c06574cb2fb1c6786
```

References:
- [Interact With Your Smart Contract](https://www.web3.university/tracks/create-a-smart-contract/interact-with-your-smart-contract)
- [How to send ETH and transfer ERC20 token with ethersJs](https://www.youtube.com/watch?v=c8Pkz1NqWNw&ab_channel=CodeWithJoe)
- [merkletreejs](https://github.com/merkletreejs/merkletreejs#Getting-started)
- [Merkle Generator and Prover in Solidity](https://github.com/dmfxyz/murky)