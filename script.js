function initialMenuTab (){
  const tabmenu = document.querySelectorAll('.js-tabmenu li')
  const tabcontent = document.querySelectorAll('.js-tabcontent section')
  tabcontent[0].classList.add('ativo')
  if(tabcontent.length && tabmenu.length){
      function activeTab (index) {
        tabcontent.forEach((section) => {
          section.classList.remove('ativo');
        });
        tabcontent[index].classList.add('ativo');
      }

      tabmenu.forEach((itemMenu, index)=> {
        itemMenu.addEventListener('click', ()=>{
          activeTab(index);
        })
      })
  }
}
initialMenuTab ()

function initialAccordion () {
  const accordionList = document.querySelectorAll('.js-acordion dt')
  const classAtivo = 'ativo'
  if(accordionList.length){
      accordionList[0].classList.add(classAtivo)
      accordionList[0].nextElementSibling.classList.add(classAtivo)

      function active(){
        this.classList.toggle(classAtivo)
        this.nextElementSibling.classList.toggle(classAtivo)
      }

      accordionList.forEach((item)=> {
        item.addEventListener('click', active);
      })
  }
}
initialAccordion ()

function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  const topo = section.offsetTop
  window.scrollTo({
    top:topo,
    behavior:'smooth'
   })
  }

  linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSection)
  })
}
initScrollSuave()

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if(isSectionVisible)
          section.classList.add('ativo');
        else 
          section.classList.remove('ativo');
      })
      
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
  }
}
initAnimacaoScroll() 

function animaNumeros() {
  const numeros = document.querySelectorAll('[data-numero]');

  numeros.forEach((numero) => {
    const total = +numero.innerText;
    const inscremento = Math.floor(total / 80);
    let start = 0;
    const timer = setInterval(() => {
      start = start + inscremento;
      numero.innerText = start;
      if(start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 25);
  });
}



async function fetchAnimais (url){
    try {
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      animaisJSON.forEach(animal => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      animaNumeros();
    } catch(erro) {
      console.log(erro);
    }
  }
  
  
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  
  fetchAnimais('./animaisapi.json');