let goods = [
    {
      id: 1,
      name: "Пальто",
      description: "Пальто зимнее",
      sizes: [10, 20, 30],
      price: 1000,
      available: true
    },
    {
      id: 2,
      name: "Куртка",
      description: "Куртка замшевая",
      sizes: [15, 25, 35],
      price: 700,
      available: true
    },
    {
      id: 3,
      name: "Брюки",
      description: "Брюки мужские",
      sizes: [27, 30, 40],
      price: 500,
      available: true
    },
    {
      id: 4,
      name: "Пиджак",
      description: "Пиджак твидовый",
      sizes: [50, 60, 70],
      price: 600,
      available: true
    },
    {
      id: 5,
      name: "Штаны",
      description: "Штаны детские",
      sizes: [42, 50, 52],
      price: 400,
      available: true
    }
];
  
let card = [
    {
        good: goods[0],
        amount: 1,
    },
    {
        good: goods[1],
        amount: 1,
    },
    {
        good: goods[2],
        amount: 1,
    },
];

// Функция добавления товара по названию и количеству
function add_goods(name, quantity) {
    let count_good = -1;
    let amount_2 = 0;
    let id_good = 0;
    for (let i of card) {
        count_good += 1;
        if (i.good["name"] == name) {
            amount_2 = i.amount + quantity;
            id_good = i.good["id"];
            card.splice(count_good, 1);
            card.push({
                good: goods[id_good - 1],
                amount: amount_2,
            });
            return i;
            }
        }
    for (let a of goods) {
        if (a.name == name) {
            card.push({
                good: a,
                amount: quantity,
            });
            return a;
            }
        }
    console.log("Такого товара нет в наличии!");
    }


// Функция удаления товара по названию
function del_goods(name) {
    let count_good = -1;
    for (let x of card) {
        count_good += 1;
        if (x.good["name"] == name) {
            card.splice(count_good, 1);
            return x;
            }
        }
    console.log("Такого товара нет в корзине!");
    }

// Функция полного удаления товара из корзины
function del_all_goods() {
    card = [];
    }

// Функция вычисления общего количества и стоимости товаров в корзине
function quantity_goods() {
    let totalAmount = 0;
    let totalSumm = 0;
    for (let prod of card) {
        totalAmount = totalAmount + prod.amount
        totalSumm = totalSumm + prod.amount * prod.good["price"];
        }
    console.log("Общее количество товаров в корзине: " + totalAmount + " Общая стоимость товаров в корзине: " + totalSumm);
    }

add_goods("Пальто", 1);
add_goods("Куртка", 1);
add_goods("Брюки", 1);
add_goods("Брюки", 1);
add_goods("Штаны", 5);
add_goods("Кепка", 1);
del_goods("Штаны");
del_goods("Пиджак");
del_all_goods();
add_goods("Пальто", 1);
add_goods("Куртка", 1);
add_goods("Брюки", 1);
add_goods("Брюки", 1);
add_goods("Штаны", 5);
console.log(card);
quantity_goods()

// console.log(card[0].good["name"]);