function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('fano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert("[ERRO] Digite um ano válido!")
  } else {
    var fsex = document.getElementsByName('txtsex')
    var idade = ano - Number(fano.value)
    var genero = ""
    var img = document.createElement('img')
    img.setAttribute('id', 'haha')
    if (fsex[0].checked){
      genero = "Homem"
      if (idade >= 0 && idade <= 5){
        img.setAttribute('src', 'masc-feto.png')
      } else if (idade >= 6 && idade <= 11){
        img.setAttribute('src', 'masc-criança.jpg')
      } else if (idade >= 12 && idade <= 19){
        img.setAttribute('src', 'masc-jovem.jpg')
      } else if (idade >= 20 && idade <= 50){
        img.setAttribute('src', 'masc-adulto.jpg')
      } else {
        img.setAttribute('src', 'masc-velho.jpg')
      }
    } else if (fsex[1].checked){
      genero = "Mulher"
      if (idade >= 0 && idade <= 5){
        img.setAttribute('src', 'femn-feto.jpg')
      } else if (idade >= 6 && idade <= 11){
        img.setAttribute('src', 'femn-criança.jpeg')
      } else if (idade >= 12 && idade <= 19){
        img.setAttribute('src', 'femn-jovem.jpg')
      } else if (idade >= 20 && idade <= 50){
        img.setAttribute('src', 'femn-adulta.jpg')
      } else {
        img.setAttribute('src', 'femn-velha.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `${genero} com ${idade} anos`
    res.appendChild(img)
  }
}