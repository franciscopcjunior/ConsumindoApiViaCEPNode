const axios = require('axios');

axios.get("https://viacep.com.br/ws/12420015/json/")
.then(function(res){
    //console.log(res.data);
    const endereco = res.data;
    console.log(`CEP: ${endereco.cep}`);
    console.log(`Logradouro: ${endereco.logradouro}`);
    console.log(`Complemento: ${endereco.complemento}`);
    console.log(`Bairro: ${endereco.bairro}`);
    console.log(`Localidade: ${endereco.localidade}`);
    console.log(`UF: ${endereco.uf}`);
    
});