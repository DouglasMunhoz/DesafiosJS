window.onload=function() {

    const itens = [ 
        {descricao: 'Mamão Papaia', preco: 8.90}, 
        {descricao: 'Laranja',      preco: 3.60}, 
        {descricao: 'Manga',        preco: 5.30}, 
        {descricao: 'Melão',        preco: 6.20}, 
        {descricao: 'Melancia',     preco: 4.80}, 
    ]
    
    const produtos = document.querySelector("#produtos");
    const cestaDoCliente = document.querySelector("#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    
    (()=>{
        for (let item of itens ){
            let li = document.createElement('li');

            for (let listaP in item) {
                if (listaP == 'preco'){
                    produtos.appendChild(li).setAttribute('data-preco', item[listaP] );
                } else {
                    produtos.appendChild(li).textContent = `${item[listaP]}` ;  
                }              
            }
        }
    })() 

    let totalzinho = 0;
    let produtosNaCesta = [];
    let selecionarItem = document.querySelectorAll("#produtos > li");

        selecionarItem.forEach(function(e){
            e.addEventListener("click", function(){
                if(produtosNaCesta.indexOf(e.textContent) != -1){ 
                    alert("Este item já está na Cesta");
                } else {
                    totalzinho += Number(e.dataset.preco);
                    produtosNaCesta.push(e.textContent);
                    let itemCesta = document.createElement('li');
                    cestaDoCliente.appendChild(itemCesta).textContent = e.textContent;
                    mostraTotalCompra.value = `R$ ${totalzinho.toFixed(2)}`;
                }
            })
        })          
}