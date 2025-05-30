import { Buffer } from "buffer";

export const filetoBase64 = file => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
  });

export const blobToBase64 = blob => {
  if(blob){
    return new Buffer(blob,'base64').toString('binary')
  }else{
    return false
  }
};