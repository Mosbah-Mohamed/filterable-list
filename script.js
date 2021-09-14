let filterInput = document.querySelector('#filterInput');
let ul = document.querySelector('#names');
let collectionHeaderLi = document.querySelector('.collection-header');
let collectionItemLi = ul.querySelectorAll('li.collection-item');


filterInput.addEventListener('keyup', function () {

    // get value of input
    let filterValue = filterInput.value.toUpperCase();

    //loop throw collection item

    for (let i = 0; i <= collectionItemLi.length; i++) {

        let a = collectionItemLi[i].getElementsByTagName('a')[0];

        // if matched
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {

            collectionItemLi[i].style.display = '';

        } else {
            collectionItemLi[i].style.display = 'none';
        }
    }
});