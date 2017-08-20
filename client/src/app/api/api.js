const allWidgets = '/allWidgets';

async function sendRequest(url, requestParams) {
  let response = await fetch(url, requestParams);
  let result;

  try {
    result = await response.json();
  } catch (e) {
    result = { error: e };
  }
  return result;
}

class API {
  static async fetchWidgets() {
    return sendRequest(allWidgets);
  }
}

export default API;
