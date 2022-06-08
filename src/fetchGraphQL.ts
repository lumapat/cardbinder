// your-app-name/src/fetchGraphQL.ts
async function fetchGraphQL(text, variables) {
    // Fetch data from local backend
    const response = await fetchWithTimeout('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }, 1000);

    // Get the response as JSON
    return await response.json();
  }

  async function fetchWithTimeout(resource, options, timeout: number) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  }

  export default fetchGraphQL;