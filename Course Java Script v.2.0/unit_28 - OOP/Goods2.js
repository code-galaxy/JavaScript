class Goods2 extends Goods {
   constructor(name, amount, image, count, sale) {
      super(name, amount, image, count);
      this.sale = sale;
   }
   draw() {
      let div = super.draw();

      if (this.sale) {
         let divSale = document.createElement('div');
         divSale.innerHTML = 'sale';
         divSale.classList.add('name');
         div.append(divSale);
      }
      return div;
   }
}