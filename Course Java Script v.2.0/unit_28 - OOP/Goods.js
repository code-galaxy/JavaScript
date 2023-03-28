class Goods {
   constructor(name, amount, image, count) {
      this.name = name;
      this.amount = amount;
      this.image = image;
      this.count = count;
   }

   draw() {

      let div = document.createElement('div');

      let n = document.createElement('p');
      n.innerText = this.name;
      n.classList.add('name');
      div.append(n);

      let img = document.createElement('img');
      img.src = this.image;
      img.classList.add('img-12-max');
      div.append(img);

      let amount = document.createElement('p');
      amount.innerText = this.amount;
      div.append(amount);

      let count = document.createElement('p');
      count.innerText = this.count;
      div.append(count);

      return div;
   }
};