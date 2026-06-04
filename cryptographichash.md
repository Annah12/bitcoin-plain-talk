# Cryptographic Hash

**Category:** Technology

## Plain English

Na mathematical function wey dey take any input - one word, one sentence, or entire block of transactions - and e dey turn am into fixed-length string of letters and numbers. If you change even one character for the input, the output go change completely.

## Analogy

Imagine say one machine dey take any document wey you feed am, whether na single word or entire book, and e dey print unique 10-digit code. If you change even one full stop inside the document, the code go be completely different. But you no fit work backwards from the code to figure out wetin the original document talk. Bitcoin dey use version of this wey dem dey call SHA-256, and na im dey hold the entire blockchain together.

## In Context

Each block dey contain the hash of the previous block.

Every block inside Bitcoin blockchain dey linked to the one before am through e hash, na unique fingerprint. If anybody try to alter old transaction, e hash go change, e go break the link to every block wey come after am. The entire chain go immediately dey recognised as invalid.

## Why It Matters

Cryptographic hashes na wetin make Bitcoin tamper-proof. You no fit change the past without redoing all the work from that point till today and the entire honest network go reject am. Na the invisible security layer wey dey behind everything Bitcoin dey do, from verifying transactions to securing wallets.

## Related Terms

- Proof of Work
- Block
- Merkle Tree
- Mining

---