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