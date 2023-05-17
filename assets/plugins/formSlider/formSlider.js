/*========= first slide =========*/

document.addEventListener('DOMContentLoaded', function() {
  var stream = document.querySelector('.gallery__stream.s1');
  var items = document.querySelectorAll('.gallery__item.s1');

  var prev = document.querySelector('.gallery__prev.s1');
  prev.addEventListener('click', function() {
    stream.insertBefore(items[items.length - 1], items[0]);
    items = document.querySelectorAll('.gallery__item.s1');
  });

  var next = document.querySelector('.gallery__next.s1');
  next.addEventListener('click', function() {
    stream.appendChild(items[0]);
    items = document.querySelectorAll('.gallery__item.s1');
  });
});

var cont = 0
document.querySelector(".next").addEventListener("click", ()=> {
  cont++
  check_1()
});

document.querySelector(".prev").addEventListener("click", ()=> {
  cont--
  check_1()
});

function check_1() {
  let itemIndex = $(".form .content div.element").length - 1; 
  if (cont <= itemIndex) {
    document.querySelector(".part_one").style.marginLeft = "-" + cont + "00%";
  }
  if (cont > 0) {
    document.querySelector(".next").classList.add('active');
    document.querySelector(".prev").classList.add('active');
  } if (cont < itemIndex) {
    document.querySelector(".prev").classList.add('active')
    document.querySelector(".submit").classList.remove('active')
  } if (cont == itemIndex) {
    document.querySelector(".next").classList.remove('active')
    document.querySelector(".prev").classList.add('active')
    document.querySelector(".submit").classList.add('active')
  } if (cont == 0) {
    document.querySelector(".next").classList.add('active')
    document.querySelector(".prev").classList.remove('active')
  document.querySelector(".submit").classList.remove('active')
  }
  
}

