const results = document.getElementById('results');
const input = document.getElementById('inp');
const  sendData =()=>{
  
 
      const xhr = new XMLHttpRequest();
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
            results.textContent = data;
          } else {
            console.error(xhr.responseText);
          }
        }
      };
      
        xhr.open('GET', `/search/${input.value}`, true);
        xhr.send();
}

input.addEventListener('input' , ()=>{
  console.log(input.value)
  sendData();
})


