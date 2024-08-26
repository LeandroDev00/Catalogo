const menu = document.getElementById("menu")
const cartBtn = document.getElementById("cart-btn")
const cartModal = document.getElementById("cart-modal")
const detailModalBtn = document.getElementById("detail-btn")
const cartItensContainer = document.getElementById("cart-items")
const cartTotal = document.getElementById("cart-total")
const Checkout = document.getElementById("checkout-btn")
const Close = document.getElementById("close-modal-btn")
const CartCount = document.getElementById("cart-count")
const AddressInput = document.getElementById("address")
const AddressWarn = document.getElementById("address-warn")

const AddresRoad = document.getElementById("rua");
const AddressCity = document.getElementById("cidade");
const AddressState = document.getElementById("uf");

//Lista para os itens do carrinho
const ListItem = []

//Abrindo Modal do Carrinho
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
});


UpdateCartModal()

//Quando clicar fora do Modal
cartModal.addEventListener("click", function(event){
    if(event.target == cartModal){
        cartModal.style.display = "none"
    }
})

//Fechando o Modal
Close.addEventListener("click", function(){
    cartModal.style.display = "none"
    AddressWarn.classList.add("hidden");
})

//Adicionando itens ao carrinho
menu.addEventListener("click", function(event){
    let parentButton = event.target.closest(".add-to-cart-btn")
    if(parentButton){
        const codigo = parentButton.getAttribute("data-code")
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        const image = parentButton.getAttribute("data-image")
        
        addCarrinho(codigo, name, price, image);
    }
})


//Função addCarrinho
function addCarrinho(codigo, name, price, image){
    const existenItem = ListItem.find(item => item.name === name)
    
    if(existenItem){
        existenItem.quantity +=0
    }
    else{
        Toastify({
            text:"Perfume adicionado no carrinho",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#818181",
            },
        }).showToast();
        ListItem.push({
            codigo,
            name,
            price,
            image,
            quantity:1
        })
    }
    UpdateCartModal()
}

//Atualiza o carrinho
function UpdateCartModal(){
    cartItensContainer.innerHTML = "";
    let total = 0.00;

    ListItem.forEach((element, index) => {
        const cartItemElement = document.createElement("div");
        cartItemElement.classList.add("flex", "justify-between", "mb-4", "flex-col");

        let multprice = element.price * element.quantity;

        cartItemElement.innerHTML = `
        <div class="flex items-center gap-4 w-full">
            <div>
                <img src="${element.image}" class="w-40 h-20 rounded-md"/>
            </div>
            <div class="flex-grow">
                <p class="font-medium text-start sm:text-ellipsis text-sm">${element.name}</p>
                <div class="flex items-center border border-gray-500 p-2 rounded-md w-16">
                    <button class="decrement-btn text-black" data-index="${index}">-</button>
                    <p class="quantity mx-2">${element.quantity}</p>
                    <button class="increment-btn text-black" data-index="${index}">+</button>
                </div>
                <p class="font-medium mt-2">${element.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency:"BRL",
                })}</p>
            </div>
            
            <div class="text-right">
                <button class="remove-from-cart-btn  text-black" data-name="${element.name}">
                   Remover
                </button>
            </div>
        </div>
        `

        total += element.price * element.quantity;

        cartItensContainer.appendChild(cartItemElement);
    });

    cartTotal.textContent = total.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    CartCount.innerHTML=ListItem.length;
    // Adicionar eventeno listeners para incrementar e decrementar botoes
    const decrementButtons = document.querySelectorAll(".decrement-btn");
    const incrementButtons = document.querySelectorAll(".increment-btn");
    
    decrementButtons.forEach(button =>{
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            if (ListItem[index].quantity > 1) {
                ListItem[index].quantity--;
                UpdateCartModal();
            };
        });
    });
    
    incrementButtons.forEach(button =>{
        button.addEventListener("click", (event) => {
            const index = event.target.getAttribute("data-index");
            ListItem[index].quantity++;
            UpdateCartModal();
        });
    });
}


//Remover Item do carrinho
cartItensContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("remove-from-cart-btn")){
        const name = event.target.getAttribute("data-name")
        
        RemoveItemCart(name)
    }

});

function RemoveItemCart(name){
    const index = ListItem.findIndex((item) => item.name === name);
    if(index !== -1){
        const item = ListItem[index]
        if(item.quantity > 1){
            item.quantity -= 1;
            UpdateCartModal();
            return;
        }
        ListItem.splice(index, 1);
        UpdateCartModal();
    }
}

//Inserir Endereço
AddressInput.addEventListener("input", function(event){
    let inputValue = event.target.value;
    if(inputValue !== ""){
        AddressInput.classList.remove("border-red-500");
        AddressWarn.classList.add("hidden");
    }
})
function limpa_formulario_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}

//Inserir CEP
function pesquisaCep(){
    const cep = document.getElementById("address").value.replace(/\D/g, "");
    if(cep != ""){
        var validaCep = /^[0-9]{8}$/;
        if(validaCep.test(cep)){
            //Preenche os campos com "..." enquanto consulta webservice.
            const rua = document.getElementById('rua').value="...";
            const bairro = document.getElementById('bairro').value="...";
            const cidade = document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";

            //Cria um elemento javascript
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data =>{
                if(!data.erro){
                    document.getElementById('rua').value=data.logradouro;
                    document.getElementById('bairro').value=data.bairro;
                    document.getElementById('cidade').value=data.localidade;
                    document.getElementById('uf').value=data.uf;
                }
                else{
                    limpa_formulario_cep();
                    alert("CEP não encontrado.");
                }
            })
            .catch(() =>{
                limpa_formulario_cep();
                alert("Erro ao consultar CEP.");
            });
        } 
        else{
            limpa_formulario_cep();
            alert("Formato de CEP inválido.");
        }
    }

    console.log(rua.value);
}

//Finalizar Pedido
Checkout.addEventListener("click", function(){
    if(ListItem.length === 0){
        Toastify({
            text:"Seu carrinho está vazio",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#818181",
            },
        }).showToast();
        return;
    }
    if(AddressInput.value === ""){
        AddressWarn.classList.remove("hidden");
        AddressInput.classList.add("border-red-500");
        return;
    }

    //Enviar Pedido para api WhatsApp
    const cartItems = ListItem.map((item) =>{
        return (
            `*Cód: ${item.codigo}*\n*${item.name}*\nQuantidade:(${item.quantity})\nPreço:R$${item.price.toFixed(2).replace('.', ',')}\n`
        )
    }).join("\n")
    const totalValue = cartTotal.textContent

    const message = encodeURIComponent(`${cartItems}\nTotal: ${totalValue}\nEndereço: ${rua.value} | ${bairro.value} | ${cidade.value}`)
    const phone = "19989188213"
    
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

    ListItem = [];
    UpdateCartModal();
})