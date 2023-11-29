let apiEndpoint = `https://api.petshelpful.com/`;
// let apiEndpoint = `http://lvh.me:3000/`;

// set different apiEndpoint for development and production
if (process.env.NODE_ENV === "development") {
  // apiEndpoint = `http://lvh.me:3000/`;
  apiEndpoint = `https://api.petshelpful.com/`;
}

export default apiEndpoint;
