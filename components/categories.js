class TabLink {
  constructor(tabElement){
    this.tabElement = tabElement;
    this.tabData = this.tabElement.dataset.tab;
    if(this.tabData === 'all'){
      this.descriptions = document.querySelectorAll('.description');
    } else {
      this.descriptions = document.querySelectorAll(`.description[data-tab='${this.tabData}']`)
    }
      this.descriptions = Array.from(this.descriptions).map(function(description){
        return new TabCard(description);
      });
      this.tabElement.addEventListener('click' , () => this.selectTab());
  }


  selectTab(){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab){
      tab.classList.remove('active-tab');
    })
    const cards = document.querySelectorAll('.description');
    cards.forEach(function(card){
      card.style.display = 'none';
    })
    this.tabElement.classList.add('active-tab')
    this.descriptions.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.style.display = 'flex';
  }
}

let categories = document.querySelectorAll('.tab');

categories.forEach(function(category){
  return new TabLink(category)
});