const address = document.getElementById("end");
const district = document.getElementById("bairro");
const city = document.getElementById("cidade");
const state = document.getElementById("estado");
const cep = document.getElementById("cep");

const searchZip = async () => {
  const cepFormated = cep.value.split("-").join("");
  const URL = `https://viacep.com.br/ws/${cepFormated}/json/`;

  const res = await fetch(URL);
  const data = await res.json();

  if (data.hasOwnProperty("erro")) {
    alert("Endereço Não Encontrado");
  } else {
    setFields(data);
  }
};

const setFields = (data) => {
  address.value = data.logradouro;
  district.value = data.bairro;
  city.value = data.localidade;
  state.value = data.uf;
};
document.getElementById("cep").addEventListener("focusout", searchZip);

const btnPrevent = (e) => {
  e.preventDefault();
};
document.getElementById("btn").addEventListener("submit", btnPrevent);