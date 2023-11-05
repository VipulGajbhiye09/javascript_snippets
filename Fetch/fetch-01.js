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
