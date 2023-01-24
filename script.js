function tabuada(){
    let num = document.getElementById("txtn")
    let tabM = document.getElementById('seltabMult')
    let tabD = document.getElementById('seltabDiv')
    if(num.value.length == 0){
        
        alert('Por favor , digite um número')
    }else{
        let n = Number(num.value)
        tabM.innerHTML = ''
        tabD.innerHTML = ''
        for(let c=1; c<=10;c++){
            let item = document.createElement('option')//irá criar um elemento html option
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabM${c}`
            tabM.appendChild(item)//Adiciona um nó ao final da lista de filhos de um nó pai especificado. 
        }
        for(let c=1; c<=10;c++){
            let item2 = document.createElement('option')//irá criar um elemento html option
            item2.text = `${n*c} / ${n} = ${n*c/n}`
            item2.value = `tabD${c}`
            tabD.appendChild(item2)//Adiciona um nó ao final da lista de filhos de um nó pai especificado. 
        }
    }
}