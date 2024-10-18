function sidebar() {
    const element = document.getElementById('sidebar');
    element.classList.toggle('open'); 
    element.classList.toggle('close'); 

    const itens = document.getElementById('nome_item');
    itens.classList.toggle('nome_item_hide');
    itens.classList.toggle('nome_item');

    const itens2 = document.getElementById('nome_item2');
    itens2.classList.toggle('nome_item_hide');
    itens2.classList.toggle('nome_item');

    const itens3 = document.getElementById('nome_item3');
    itens3.classList.toggle('nome_item_hide');
    itens3.classList.toggle('nome_item');

    const itens4 = document.getElementById('nome_item4');
    itens4.classList.toggle('nome_item_hide');
    itens4.classList.toggle('nome_item');

    const itens5 = document.getElementById('nome_item5');
    itens5.classList.toggle('nome_item_hide');
    itens5.classList.toggle('nome_item');

    const itens6 = document.getElementById('nome_item6');
    itens6.classList.toggle('nome_item_hide');
    itens6.classList.toggle('nome_item');

}