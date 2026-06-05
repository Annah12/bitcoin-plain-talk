# Merkle Tree

**Category:** Technology

## Plain English

Na mathematical structure wey dey bundle all the transactions inside one block into single fingerprint, e make am easy to verify say nobody don tamper with anything.

## Analogy

Imagine say you get 100 receipts from market trip. Instead make you dey check each receipt one by one, you group dem in pairs, create summary for each of the pair, then you summarise those summaries, until you get one final number wey represent all 100 receipts. If anybody change even one receipt, the final number go change completely. Merkle Tree dey do exactly this for Bitcoin transactions, e dey turn thousands of transactions into one short fingerprint wey dem dey call Merkle Root.

## In Context

Dem dey store the Merkle Root inside every block header.

Each block contain one single hash wey na fingerprint of every transaction inside that block. If even one transaction change, the Merkle Root go change and the entire block go be rejected by the network. Na so Bitcoin dey guarantee say transaction records no fit be secretly modified.

## Why It Matters

Merkle Tree dey make Bitcoin efficient and tamper-proof at the same time. Lightweight wallet wey dey your phone no need to download every transaction, e just dey check the Merkle Root to confirm say transaction dey real. Na the reason why you fit verify payment without downloading the entire blockchain.

## Related Terms

- Block
- Blockchain
- Cryptographic Hash
- Confirmation
---