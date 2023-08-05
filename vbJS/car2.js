
function carro4(){

    var box = window.document.getElementById('vb-quantid4');
    var caixa = Number(box.value);

    var type_color = window.document.getElementById('vb-color4');
    var color = type_color.options[type_color.selectedIndex].text;

    var size = window.document.getElementById('vb-size4');
    var size_value = String(size.value);

    var genero = "M";

    if(caixa == " " || caixa < 1 ||  caixa > 100 ){
         
      window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100')

    }else {  

      const box1 = caixa;
      var tot = 9.90;
      let value_array = [];
      var array_tot = 0;

      window.alert('ADICIONADO AO CARRINHO !!');

      for(var i = 0; i < box1; i++){

         value_array[i] = tot;
         array_tot += value_array[i];
      }

      var tot_array = array_tot.toFixed(2);

      divcarrinho4.innerHTML = `<codd><h2>PREÇO TOTAL: R$ ${tot_array}</h2></codd>`;
      carrinhodiv4.innerHTML = `<h3><span>&#128722;  ${box1}x BERMUDA JOGADOR</br> // COR: ${color}</br> // TAMANHO: ${size_value}</br> // GENERO: ${genero}</br> // TIPO: BERMUDA</br> // MALHA: DRYFIT &#128722;</span></h3>`;        

    }
}



function carro5(){

  var box = window.document.getElementById('vb-quantid5');
  var caixa = Number(box.value);

  var type_model = window.document.getElementById('vb-color5');
  var model = type_model.options[type_model.selectedIndex].text;

  var size = window.document.getElementById('vb-size5');
  var size_value = String(size.value);

  var genero = "M";

  if(caixa == " " || caixa < 1 ||  caixa > 100 ){
       
    window.alert('[ERRO] - INFORME UM NÚMERO DE 1 A 100')

  }else {  

    const box1 = caixa;
    var tot = 55.90;
    let value_array = [];
    var array_tot = 0;

    window.alert('ADICIONADO AO CARRINHO !!');

    for(var i = 0; i < box1; i++){

       value_array[i] = tot;
       array_tot += value_array[i];
    }

    var tot_array = array_tot.toFixed(2);

    divcarrinho5.innerHTML = `<codd><h2>PREÇO TOTAL: R$ ${tot_array}</h2></codd>`;
    carrinhodiv5.innerHTML = `<h3><span>&#128722;  ${box1}x CALÇA JEANS</br> // MODELO: ${model}</br> // TAMANHO: ${size_value}</br> // GENERO: ${genero}</br> // TIPO: CALÇA</br> // MALHA: JEANS &#128722;</span></h3>`;        

  }
}