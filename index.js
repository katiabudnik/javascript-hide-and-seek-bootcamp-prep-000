function getFirstSelector(selector) {
  return document.querySelector(selector);

}

function nestedTarget() {
  return document.getElementById('nested').querySelector('.target')
}


function deepestChild() {
   var grand = document.getElementById('grand-node');
   var numberOfChildren = grand.childElementCount;
   var currentChild = grand.querySelector('div');
   while (numberOfChildren != 0) {
    currentChild = currentChild.querySelector('div');
    numberOfChildren = currentChild.childElementCount;
  }
  return currentChild;

}
function increaseRankBy(n) {
  var ranks = document.querySelectorAll('.ranked-list li')
  for (let i = 0, l = ranks.length; i < l; i++) {
    ranks[i].innerHTML = (parseInt(ranks[i].innerHTML) + n).toString();
  }
}
