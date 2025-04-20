// apiService.js
export const fetchDataHeadlineNews= async (start,size) => {
  try {
    const payload = {
      startDate: "",
      endDate : "",
      start: start,
      size: size,
    };
    const response = await fetch('http://localhost:3001/headline/news', {
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
    const response = await fetch('http://localhost:3001/thumbnail/news', {
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
    const response = await fetch('http://localhost:3001/landing/news', {
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

