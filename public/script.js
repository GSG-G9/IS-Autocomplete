const results = document.getElementById('results');
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText);
          results.textContent = data;
        } else {
          console.error(xhr.responseText);
        }
      }
    };
    xhr.open('GET', '/cities', true);
    xhr.send();
  }
};
