# Solana Crowdsale 

## Technology Stack & Tools
- Javascript (Unit testing)
- [NPM](https://www.npmjs.com/) (Package manager)
- [Next.js](https://nextjs.org/) (Frontend framework)
- [Anchor (v0.30.1)](https://coral-xyz.github.io/anchor/ts/index.html) (Solana development framework)
- [Solana Web3.js (v1.95.3)](https://solana-labs.github.io/solana-web3.js/index.html) (Solana connection)
- [Solana Program Library (SPL v0.4.9)](https://solana-labs.github.io/solana-program-library/token/js/index.html) (Solana token interaction)

## Running the Project
1. Clone and enter the repository

2. Install dependencies
`npm install`

3. Setup config
You'll want to fill the associated fields with the addresses generated from the Solana Crowdsale project.

- CROWDSALE_PROGRAM_ID
- CROWDSALE_PDA
- CROWDSALE_AUTHORITY_PDA
- CROWDSALE_PDA_TOKEN_ACCOUNT
- TOKEN_MINT_ACCOUNT

3. Launch frontend
`npm run dev`