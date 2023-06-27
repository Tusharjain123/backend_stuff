# End to end encryption
 ## Using Diffie Hellman Algorithm
 ### Let's understand it by using Alice Bob example
 > The actual workflow will be like there is a websocket server and Alce and Bob will connect to this server and share the prime(p) and the generator(g) value (Primitive root value of p).
 - They both used their private key(y) to generate their public key(x) using the formula. `x = (g^y) mod p` 
 - - For alice ->  `xa = (g^ya) mod p` 
 - - For bob -> `xb = (g^yb) mod p` 
 - Now, they both share their key xa, xb. 
 - Using this shared key they both generate the common shared secret key `k = (x^y) mod p`
 - - For alice -> `ka = (xb^ya) mod p`
 - - For Bob -> `kb = (xa^yb) mod p` 
 - We can proove algebrically that `ka = kb`
 Now, both have their shared secret key which is not known to the server. It means that the server is unable to read our messages
### lets understand it with an example, 
Let's `p = 23` and `g = 5`
- Assume, alice's private key will be `6` and bob's private key will be `15`
- Now, alice's public key, `xa = 5^6 mod 23 = 8`
- Bob's public key, `xb = 5^15 mod 23 = 19`
- They will share their public keys which each other,
- For alice's, `ka = 19^6 mod 23 = 2`
- Bob's, `kb = 8^15 mod 23 = 2` 
#### Shared secret key = `2`