// apiService.js
let API_HOST = process.env.REACT_APP_HOSTS;


export const fetchTestApi= async () => {
  try {
    const response = await fetch(`${API_HOST}/api/test`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });

    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    console.log("SUCCESS FETCH API", result)
    return result;
  } catch (error) {
    console.log("FAILED FETCH API ",error.message);
    throw error;
  }
};

export const fetchTestApiPost= async () => {
  try {
    const response = await fetch(`${API_HOST}/api/test`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    });

    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    console.log("SUCCESS FETCH API POST", result)
    return result;
  } catch (error) {
    console.log("FAILED FETCH API POST",error.message);
    throw error;
  }
};

export const fetchTestApiPostWithPayload= async () => {
  try {
    const payload = {
      startDate: "",
      endDate : "",
      start: 1,
      size: 10,
    };
    
    const response = await fetch(`${API_HOST}/api/test/payload`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    console.log("SUCCESS FETCH API POST WITH PAYLOAD", result)
    return result;
  } catch (error) {
    console.log("FAILED FETCH API POST WITH PAYLOAD",error.message);
    throw error;
  }
};

export const fetchDataHeadlineNews= async (start,size) => {
  try {
    const payload = {
      startDate: "",
      endDate : "",
      start: start,
      size: size,
    };
    const response = await fetch(`${API_HOST}/api/headline/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(response);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchDataThumbnailNews= async (start,size) => {
  try {
    const payload = {
      startDate: "",
      endDate : "",
      start: start,
      size: size,
    };
    const response = await fetch(`${API_HOST}/api/thumbnail/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(response);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const fetchDataLandinglNews = async (start,size) => {
  try {
    const payload = {
      startDate: "",
      endDate : "",
      start: start,
      size: size,
    };
    const response = await fetch(`${API_HOST}/api/landing/news`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(response);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

