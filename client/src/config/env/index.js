const isDevelopment = process.env.NODE_ENV === 'development';

let URL;

if (isDevelopment) {
  URL = 'http://localhost:5000';
} else {
  URL = 'https://delnero-review-site.herokuapp.com';
}

export { URL };
