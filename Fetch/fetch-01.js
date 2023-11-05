// Fetch API -  Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise so Async/Await is required

const url = 'enter_url_endpoint';

const fetch_data = async () => {
  try {
    const resp = await fetch(url);
    
    const data= resp.json();
    console.log(data);
  }
  catch (error) {
    console.log(error)
  }
};
