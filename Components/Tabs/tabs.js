class Tablink {
    constructor(tabNav, link) {
      this.link = link
      this.tabContent = new TabContent(tabNav, this.link.dataset.tab, this.link)
      this.link.addEventListener('click', ()=> {
        this.tabContent.toggle()
      })
    }
  }
  
  class TabContent {
    constructor(tabNav, contentTabId, link) {
      console.log(contentTabId)
      this.content = tabNav.querySelector(`.tabs-item[data-tab="${contentTabId}"]`)
      this.tabNav = tabNav
      this.link = link
    }
    toggle() {
      this.reset()
      this.content.classList.toggle('tabs-item-selected')
      this.link.classList.toggle('tabs-link-selected')
      
    }
    reset() {
      const shown = this.tabNav.querySelector('.tabs-item.tabs-item-selected')
      if (shown) shown.classList.toggle('tabs-item-selected')
      const shownLink = this.tabNav.querySelector('.tabs-link.tabs-link-selected')
      if (shown) shownLink.classList.toggle('tabs-link-selected')
  }
  }
  
  const navigators = document.querySelectorAll('.tabs')
  navigators.forEach(tabNav => {
    const links = tabNav.querySelectorAll('.tabs-link')
    links.forEach(link => {
      new Tablink(tabNav, link)
    })
  })
  