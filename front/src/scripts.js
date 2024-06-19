const listToken = document.getElementById('tokensList')

function addToken (){
    const titleToken = '';
    const symbolToken = '';
    const supplyToken = '';
    const contratoToken = '';
    const contratoCheck = '';

    const listItem = document.createElement('article')
    listItem.classList.add('article-token');
    listItem.innerHTML = `
    <div class="container">
        <div class="box">
            <div class="conteudo">
                <h1>${titleToken}</h1>
                <h5>${symbolToken}</h5>
                <h5>${supplyToken}</h5>
                <p>${contratoToken}</p>
                <p>${contratoCheck}</p>
                    <button class="button">
                        <span class="button-content">More infos </span>
                    </button>
                              
                </div>
            </div>
    </div>
    `

    listToken.appendChild(listItem)
    //limpando as variaveis para receber novos tokens
    titleToken = '';
    symbolToken = '';
    supplyToken = '';
    contratoToken = '';
    contratoCheck = '';
}