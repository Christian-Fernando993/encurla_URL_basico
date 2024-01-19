function encurtarUrl() {
  let url = document.getElementById("input-url").value;

  if (!url) {
    alert("Insira uma URL para encurtar");
    return;
  }

  const linkRequest = {
    'url_long': url,
    'cdn_prefix': 's.loovi.com.br',
  };

  fetch("https://s.loovi.com.br/admin_shrink_url", {
    method: "POST",
    body: JSON.stringify(linkRequest)
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      let inputUrl = document.getElementById("input-url");
      inputUrl.value = json.url_short;
    });

}


function copiarUrl() {
    let inputUrl = document.getElementById('input-url')

    inputUrl.select()
    inputUrl.setSelectionRange(0, 99999)

    navigator.clipboard.writeText(inputUrl.value).then(() => {
        alert(`URL Copiada: ${inputUrl.value}`)
    })
}