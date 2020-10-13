// Задание 7 - дополнительное, выполнять не обязательно
// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.

// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {},

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {},

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {},

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {},

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {},
// };

console.log('Задание 7');

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    let id = 0;

    if (this.transactions.length === 0) {
    } else {
      for (const transaction of this.transactions){
          id = transaction.id + 1;
      }
    }
    
    const newTransaction = {
      id,
      type,
      amount,
    }
    return newTransaction;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    let id = 0;

    this.balance += amount;

    if (this.transactions.length === 0) {
      this.transactions[0] = this.createTransaction(amount, 'deposit');
    } else {
      for (const transaction of this.transactions){
          id = transaction.id + 1;
      }
      this.transactions[id] = this.createTransaction(amount, 'deposit');
    }
  },
  

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    let id = 0;

    if (amount > this.balance ) {
      console.log('Cнятие такой суммы не возможно, недостаточно средств!');
    } else {
      this.balance -= amount;

      if (this.transactions.length === 0) {
        this.transactions[0] = this.createTransaction(amount, 'withdraw');
      } else {
        for (const transaction of this.transactions){
            id = transaction.id + 1;
        }
        this.transactions[id] = this.createTransaction(amount, 'withdraw');
      }
    }
    
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (const transaction of this.transactions) {
      if (transaction.id === id) {
        console.log(transaction);
      }
    }
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    let amountSumm = 0;

    for (const transaction of this.transactions) {
      if (transaction.type === type) {
        amountSumm += transaction.amount;
      }
    }
    return amountSumm;
  },
};

// Проверка
console.log('Пополнить на 200');
account.deposit(200);
console.log('Ваш баланс:', account.getBalance());

console.log('Пополнить на 100');
account.deposit(100);
console.log('Ваш баланс:', account.getBalance());

console.log('Пополнить на 250');
account.deposit(250);
console.log('Ваш баланс:', account.getBalance());

console.log('Пополнить на 150');
account.deposit(150);
console.log('Ваш баланс:', account.getBalance());

console.log('Снять с баланса 350');
account.withdraw(350);
console.log('Ваш баланс:', account.getBalance());

console.log('Снять с баланса 500');
account.withdraw(500);
console.log('Ваш баланс:', account.getBalance());

console.log('Снять с баланса 350');
account.withdraw(350);
console.log('Ваш баланс:', account.getBalance());

console.log('История транзакций:', account.transactions);

console.log('Детали тразакции id - 3:');
account.getTransactionDetails(3);
console.log('Детали тразакции id - 4:');
account.getTransactionDetails(4);

console.log('Количество пополненных средств:', account.getTransactionTotal('deposit'));
console.log('Количество снятых средств:', account.getTransactionTotal('withdraw'));