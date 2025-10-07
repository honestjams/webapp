document.getElementById('fetchBtn').addEventListener('click', async () => {
  const out = document.getElementById('output');
  out.textContent = 'Trying to fetch /api/hello...';
  try{
    const res = await fetch('/api/hello');
    if(!res.ok) throw new Error(res.status + ' ' + res.statusText);
    const data = await res.json();
    out.textContent = JSON.stringify(data, null, 2);
  }catch(err){
    out.textContent = 'Fetch failed (expected on static-only site): ' + err.message;
  }
});
