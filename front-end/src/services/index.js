const HEADERS = {'Content-Type': 'application/json'};

export async function fetchList() {
  try {
    const API_URL = 'http://localhost:3001/webmotors'
    const data = await fetch(API_URL);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}


export async function fetchSave(formData) {
  try {
    const API_URL = 'http://localhost:3001/webmotors'
    
    const data = await fetch(API_URL, {
      method: 'POST',
      headers: HEADERS,
      body: JSON.stringify(formData),
    });
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchRemove(id) {
  try {
    const API_URL = `http://localhost:3001/webmotors/${id}`
    const data = await fetch(API_URL, 
      {method: 'DELETE'});
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchUpdate(id, formData) {
  try {
    const API_URL = `http://localhost:3001/webmotors/${id}`
    const data = await fetch(API_URL, {
      method: 'PUT',
      headers: HEADERS,
      body: JSON.stringify(formData),
    });
    return data.json();
  } catch (error) {
    console.log(error);
  }
}

export async function fetchDetails(id) {
  try {
    const API_URL = `http://localhost:3001/webmotors/${id}`;
    const data = await fetch(API_URL);
    return await data.json();
  } catch (error) {
    console.log(error);
  }
}