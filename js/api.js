const API_URL = 'https://23.javascript.pages.academy/keksobooking';

const getData = () => (
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response;
      }
      throw new Error(response.status);
    })
    .then((response) => response.json())
);

const sendData = (form) => (
  fetch(API_URL,
    {
      method: 'POST',
      body: new FormData(form),
    },
  ).then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(response.status);
  })
);

export {getData, sendData};
