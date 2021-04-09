---
title: "What are monoalphabetic substitution ciphers"
date: "2021-03-17"
draft: false
path: "/blog/monoalphabetic_substitution_cipher"
---

Substitution ciphers are probably one of the most simple forms of encryption. Basically all you  have to do is substitute each letter with another letter. The earliest forms of substitution ciphers 
were the Ceasar cipher, also known as Ceasar shift.

The transformation from the plaintext alphabet to the ciphertext alphabet is done by shifting our plaintext alphabet to the left or right. 

Our resulting cipher alphabet would look as follows

|   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |   |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z |
| n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c | d | e | f | g | h | i | j | k | l | m |


For example we assign our plaintext letter 'a' to our ciphertext letter 'G'. This replacement is then fixed and constant throughout our message. 