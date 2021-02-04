async function fetchData(){
  let headers = new Headers();

  headers.append('Access-Control-Allow-Origin','http://localhost:5500/');
  headers.append('Access-Control-Request-Headers','http://localhost:5500/');
  headers.append('Content-Type', 'application/json');

  const result = await fetch("http://127.0.0.1:8000/livros/",{
    method:'GET',
    headers: headers,
    mode:'no-cors'
  })
  .then(res => console.log(res))
  .then(response => console.log(response))
  .catch(err => console.log(err))
  
  return result;
}

fetchData()
 



  
