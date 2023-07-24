class Account {
  private _accountNo: number;
  private _owner: string;
  private _balance: number;
  private _pin: number;

  constructor(accountNo: number, owner: string, balance: number, pin: number) {
    this._accountNo = accountNo;
    this._owner = owner;
    this._balance = balance;
    this._pin = pin;
  }

  // Getters for private properties
  public get accountNo(): number {
    return this._accountNo;
  }

  public get owner(): string {
    return this._owner;
  }

  public get balance(): number {
    return this._balance;
  }

  // Deposit money into the account
  public deposit(pin: number, amount: number): boolean {
    if (this._pin !== pin) {
      return false;
    }
    this._balance += amount;
    return true;
  }
 

  // Withdraw money from the account
  public withdraw(pin: number, amount: number): boolean {
    if (this._pin !== pin || this._balance < amount) {
      return false;
    }
    this._balance -= amount;
    return true;
  }

  // Transfer money from this account to another account
  public transfer(pin: number, amount: number, account:Account): boolean {
    if (this._pin !== pin || this._balance < amount) {
      return false;
    }
    this._balance -= amount;
    // account.deposit(pin, amount);
    // Bro I really did had issues with this code for a while because the nonsense I wrote up there isn't updating the account I am transfering to with the transfer amount
    account._balance += amount;
    // In the above code the new acount I am transfering it's balance is been updated with my current amount 
    // account += account.deposit(pin, number)
    return true;
  }
 
}


// Example usage
const user = new Account(5556, "John Smith", 5000, 1234);
const user1 = new Account(3334, "Jane Doe", 10000, 5678);
//   const account2 = new Account("MyBank", "Eane Doe", 10000, 5678);

   

// // Deposit money
// const deposited = user.deposit(1234, 1000);
// if (deposited){
//   console.log("successfully deposited")
// } else {
//   console.log("Deposit failed - Nothing to deposit || exceded daily deposit")
// }

//   // Withdraw money
//   const withdrawn = user.withdraw(1234, 2000);
//   if (withdrawn) {
//     console.log("Withdrawal successful!");
//   } else {
//     console.log("Withdrawal failed - incorrect pin or insufficient funds!");
//   }

// Transfer money
const transfered = user.transfer(1234, 4000, user1);
if (transfered) {
  
  console.log("Transfer successful!");
} else {
  console.log(
    "Transfer failed - incorrect pin or insufficient funds in the source account!"
  )};

  console.log(user)
  console.log(user1)
