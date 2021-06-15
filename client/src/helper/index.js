// import Resizer from 'react-image-file-resizer';
import Compress from 'compress.js';

const compress = new Compress();

export const resizeImageFn = async (file) => {
  console.log(file);
  const resizedImage = await compress.compress([file], {
    size: 2, // the max size in MB, defaults to 2MB
    quality: 1, // the quality of the image, max is 1,
    maxWidth: 300, // the max width of the output image, defaults to 1920px
    maxHeight: 300, // the max height of the output image, defaults to 1920px
    resize: true, // defaults to true, set false if you do not want to resize the image width and height
  });
  // console.log(resizedImage);
  const img = resizedImage[0];
  const imgData = img.data;
  const imgPrefix = img.prefix;
  const result = imgPrefix + imgData;
  return result;
};
