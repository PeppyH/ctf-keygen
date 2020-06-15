import React, { useState } from "react";

export const Keygen = () => {
  const [productKey, setProductKey] = useState('');
  const validChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  const generateProductKey = () => {
    // generate the first 15 characters of the product key
    const key = [];

    // total of the (character ordinates+1 * array index+1) of the first 15 characters
    let keyOrdTotal = 0;
    for(let i = 0; i < 15; i++){
      // generate a random index to select a character from the above array
      const rand = Math.random();
      let randomIndex = Math.floor(rand * validChars.length);
      if(randomIndex === validChars.length){
        randomIndex -= 1;
      }
      const char = validChars[randomIndex];
      //add random valid character to key;
      key.push(char);
      // in the source we convert char to number and increment by 1
      // but because of how our valid chars are arranged, its literally just the array index. +1
      keyOrdTotal += (randomIndex+1)*(i+1);
    }
    setProductKey(key.join("") + validChars[keyOrdTotal % 36]);
  }

  return (<div>
    <p>{productKey}</p>
    <button onClick={()=>generateProductKey()}>Generate New ProductKey</button>
  </div>)
}