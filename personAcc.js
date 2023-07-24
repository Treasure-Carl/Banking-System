class Account {
    constructor(accountNo, owner, balance, pin) {
      this._accountNo = accountNo;
      this._owner = owner;
      this._balance = balance;
      this._pin = pin;
    }
  
    get accountNo() {
      return this._accountNo;
    }
  
    get owner() {
      return this._owner;
    }
  
    get balance() {
      return this._balance;
    }
  
    deposit(pin, amount) {
      if (this._pin !== pin) {
        return false;
      }
      this._balance += amount;
      return true;
    }
  
    withdraw(pin, amount) {
      if (this._pin !== pin || this._balance < amount) {
        return false
      }
      this._balance -= amount;
      return true
    }
  
    transfer(pin, amount, account) {
    if (this._pin !== pin || this._balance < amount) {
        return false
        // return console.log(
        //     "Transfer failed - incorrect pin or insufficient funds in the source account!"
        //   ); ;
      }
      this._balance -= amount;
      account._balance += amount;
      return true
    //   console.log("Transfer successful!");;
    }
  
  }
    // Deposit money
  const deposited = user.deposit(1234, 1000);
  if (deposited){
    console.log("successfully deposited")
  } else {
    console.log("Deposit failed - Nothing to deposit || exceded daily deposit")
  }
  
  // Withdraw money
  const withdrawn = user.withdraw(1234, 500);
  if (withdrawn) {
    console.log("Withdrawal successful!");
  } else {
    console.log("Withdrawal failed - incorrect pin or insufficient funds!");
  }
  const transferred = transfer(1234, 100, user1);
  if (transferred) {
    console.log("Transfer successful!");
  } else {
    console.log(
      "Transfer failed - incorrect pin or insufficient funds in the source account!"
    );
  }
  
  
  const user = new Account(5556, "John Smith", 0, 1234);
  const user1 = new Account(3334, "Jane Doe", 0, 5678);
  

  console.log(user.deposited);
  console.log(user)
//   console.log(user.transfer(5678, 500, user1));
//   console.log(user);
//   console.log(user1)
  





// Assignment:  1. category 2. Public fields



// type Gender = "MALE" | "FEMALE";

// class Librarian {
//     private firstName: string;
//     private lastName: string
//     private email: string;
//     private gender: Gender;
//     private phoneNum: string;

//     constructor(firstName: string, lastName: string, email: string, gender: Gender, phoneNum: string) {
//         this.firstName = firstName;
//         this.lastName= lastName;
//         this.email = email;
//         this.gender = gender;
//         this.phoneNum = phoneNum;
//     }
    
//     get fullName(): string {
//         if(this.gender === "MALE"){
//             return `Mr. ${this.firstName} - ${this.lastName}`;
//         }else{
//             return `Mrs.${this.firstName} - ${this.lastName}`;
//         }
//     }
// }


// // There should be a type of category
// class Books{
//     private name: string;
//     private author: string;
//     private quantity: number;
//     private category: string;
//     private date_published: string;

//     constructor(name: string, author: string, quantity: number, category: string, date_published: string) {
//         this.name = name;
//         this.author = author;
//         this.quantity = quantity;
//         this.category = category;
//         this.date_published = date_published;

// }

// }

// class Library {
//     private name: string;
//     private books: Books[]; //TODO
//     private librarians: Librarian[]; //TODO
//     // private author: Author[];

//     constructor(name: string) {
//         this.name = name;
//         this.books = [];
//         this.librarians = []
//         // this.author = []
//     }

//     // TODO
//     assignLibrarian(librarian: Librarian) {
//         this.librarians.push(librarian);
//         return this.librarians;
//     }

//     asssignBooks(books: Books){
//         this.books.push(books);
//         return this.books;
//     }

//     addBooks(){}

//     addBook(name: Books){
//         this.books.push(name);
//     }


//     get libraryName(): string {
//         return this.name;
//     }

//     get libraryBooks(): Books[] {
//         return this.books;
//     }

//     get librariansName(): Librarian[] {
//         return this.librarians;
//     }
// }




// const mainLib: Library = new Library("Main");

// const olaide  = new Librarian('olaide','Ojuolape', 'ojuolapeoliad92@gmail.com', "FEMALE", "+23422928289289")
// const gwen  = new Librarian('Gwen','Ochayan', 'go@gmail.com', "FEMALE", "+23428289289292")
// const hanif  = new Librarian('olaide','Ojuolape', 'hanif@gmail.com', "MALE", "+23428289282029")
// const olympia  = new Librarian('olympia','The great', 'olympia@gmail.com', "FEMALE", "+2342028289289")


// const librarians = mainLib.assignLibrarian(olaide)
// // console.log(mainLib);
// mainLib.assignLibrarian(gwen)
// mainLib.assignLibrarian(hanif)
// mainLib.assignLibrarian(olympia)
// // console.log(mainLib);


// const Paschal = new Books("The stolen Dog", "Ston.JB Blocks", 48, "Biography", "16th of June 2023")
// const Hassan = new Books("Jwel and Joe", "Daniel.O Russel", 69, "Fiction", "8th of April 2021")
// const Kids = new Books("Miraculus", "Breaf Boy", 200, "Scary", "3rd of September 1850")
// const Bosses = new Books("Indistructive", "David.D Guy", 25, "Comics", "7th of December 2013")
// const Treasure = new Books("Unstopable", "Emmanuel Incase", 100, "Drama", "31th of January 1965")

// mainLib.asssignBooks(Paschal)
// mainLib.asssignBooks(Hassan)
// mainLib.asssignBooks(Kids)
// mainLib.asssignBooks(Bosses)
// mainLib.asssignBooks(Treasure)



// console.log(mainLib)





































// class Bank {
//   private readonly bankName: string;
//   private accounts: Account[] = [];

//   constructor(name: string) {
//     this.bankName = name;
//   }

//   createAccount(owner: string, pin: number): Account {
//     const account = new Account(this.bankName, owner, pin);
//     this.accounts.push(account);
//     return account;
//   }
// }

// class Account {
//   private readonly bankName: string;
//   private readonly owner: string;
//   private readonly pin: number;
//   private balance: number = 0;

//   constructor(bankName: string, owner: string, pin: number) {
//     this.bankName = bankName;
//     this.owner = owner;
//     this.pin = pin;
//   }

//   private verifyPin(pin: number): boolean {
//     return this.pin === pin;
//   }

//   deposit(amount: number, pin: number): void {
//     if (this.verifyPin(pin)) {
//       this.balance += amount;
//       console.log(`Deposited ${amount} into account of ${this.owner}.`);
//     } else {
//       console.log(`Invalid PIN for account of ${this.owner}.`);
//     }
//   }

//   withdraw(amount: number, pin: number): void {
//     if (this.verifyPin(pin)) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         console.log(`Withdrew ${amount} from account of ${this.owner}.`);
//       } else {
//         console.log(`Insufficient funds in account of ${this.owner}.`);
//       }
//     } else {
//       console.log(`Invalid PIN for account of ${this.owner}.`);
//     }
//   }

//   transfer(amount: number, destinationAccount: Account, pin: number): void {
//     if (this.verifyPin(pin)) {
//       if (this.balance >= amount) {
//         this.balance -= amount;
//         destinationAccount.balance += amount;
//         console.log(`Transferred ${amount} from account of ${this.owner} to account of ${destinationAccount.owner}.`);
//       } else {
//         console.log(`Insufficient funds in account of ${this.owner}.`);
//       }
//     } else {
//       console.log(`Invalid PIN for account of ${this.owner}.`);
//     }
//   }

//   getBalance(pin: number): number {
//     if (this.verifyPin(pin)) {
//       return this.balance;
//     } else {
//       console.log(`Invalid PIN for account of ${this.owner}.`);
//       return 0;
//     }
//   }
// }


// const myBank = new Bank("MyBank");

// // Create two accounts with different owners and pins
// const account1 = myBank.createAccount("Alice", 1234);
// const account2 = myBank.createAccount("Bob", 5678);

// // Deposit money into account1
// account1.deposit(1000, 1234);

// // Withdraw money from account1
// account1.withdraw(500, 1234);

// // Transfer money from account1 to account2
// account1.transfer(200, account2, 1234);

// // Get account balances
// console.log(account1.getBalance(1234)); // Output: 300
// console.log(account2.getBalance(5678)); // Output: 200