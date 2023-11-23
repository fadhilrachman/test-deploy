export const fetcherPOST = async (url, body) => {
  try {
    const response = await fetch(process.env.API_URL + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.response);
    return error;
  }
};

export const fetcherPOSTLocal = async (url, body) => {
  try {
    const response = await fetch(process.env.API_URL_LOCAL + url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.response);
    return error;
  }
};

export const fetcherGET = async (url) => {
  try {
    const response = await fetch(process.env.API_URL + url, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.response);
    return error;
  }
};
