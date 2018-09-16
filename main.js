
var all = [];

var fromStorage = localStorage.getItem('all');
if (fromStorage !== null) {
    all = JSON.parse(fromStorage);
}

render();

function add () {
    var price = parseInt(document.querySelector('#product').value);
    var obj = { price: price };
    all.push(obj);
    render();
    localStorage.setItem('all', JSON.stringify(all));
    document.querySelector('#product').value = '';
}

function del (index) {
    all.splice(index, 1);
    render();
    localStorage.setItem('all', JSON.stringify(all));
}

function clearAll () {
    all = [];
    render();
    localStorage.setItem('all', JSON.stringify(all));
}


function render () {
    document.querySelector('#list').innerHTML = '';

    for (var i = 0; i < all.length; i++) {
        document.querySelector('#list').innerHTML +=
            `<li class="list-group-item d-flex justify-content-between
                align-items-center"
            >
                ${all[i].price}
                <span onclick="del(${i})" class="badge badge-primary
                    badge-pill">X</span>
            </li>`;
    }

    var total = 0;

    for (var i = 0; i < all.length; i++) {
        total += all[i].price;
    }

    document.querySelector('#total').innerHTML = total;
}