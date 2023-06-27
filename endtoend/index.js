// Just a representation of Diffie Hellman Algorithm using the alice bob example
// requiring crypto module for 
const { error } = require("console")
const crypto = require("crypto")

//  to apply diffie hellman algo using the  More Modular Exponential (MODP) Diffie-Hellman groups for Internet Key Exchange (IKE)
// I have used the 4096-bit MODP Group whose code is 16 to generate the prime, generator  
const alice = crypto.getDiffieHellman("modp16")
const bob = crypto.getDiffieHellman("modp16")

// We can get see the generator and prime values by calling the getGenerator and getPrime function respectively
// const generator = alice.getGenerator()
// const prime = alice.getPrime()
// console.log(generator)
// console.log(prime)


// here we have generated keys to generate the public Keys 
alice.generateKeys()
bob.generateKeys()

// Here we have just computed the shared secret key by using the other's public key
// For, 
const aliceSecret = alice.computeSecret(bob.getPublicKey(), "utf8", "hex")
const bobSecret = bob.computeSecret(alice.getPublicKey(), "utf8" , "hex")

// verifying the secret
if (aliceSecret === bobSecret){
    console.log("End to end encrypted")
}
else{
    throw error("Encryption failed")
}
