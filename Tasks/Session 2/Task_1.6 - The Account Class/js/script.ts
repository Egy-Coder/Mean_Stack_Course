class Account {

    private id: string;
    private name: string;
    private balance: number;
  
    constructor(id: string, name: string, balance: number = 0) {
      this.id = id;
      this.name = name;
      this.balance = balance;
    }
  
    getId(): string {
      return this.id;
    }
  
    getName(): string {
      return this.name;
    }
  
    getBalance(): number {
      return this.balance;
    }

    credit(amount: number): number {
      this.balance += amount;
      return this.balance;
    }
  
    debit(amount: number): number {

      if(amount <= this.balance){
        this.balance -= amount;
      }else{
        console.log("Amount exceeded balance");
      }

      return this.balance;
    }
  

    transferTo(another:Account,amount:number): number {

      if(amount <= this.balance){

        another.balance += amount;
        this.balance -= amount;

      }else{
        console.log("Amount exceeded balance");
      }    

      return this.balance;
    }


    toString(): string {
      return `
                    Id : ${this.id}  
                    Name : ${this.name}  
                    Balance : ${this.balance} 
                    `;
    }
  }


  
  // the initial account balance = 15000
  var account = new Account("acc-1", "account-1", 15000); 

  // another account
  var anotherAccount = new Account("acc-2", "account-2",50000); 


  // Output
  console.log('ID ===> ' , account.getId());
  console.log('Name ===> ' , account.getName());
  console.log('Initial balance ===> ' , account.getBalance());
  console.log('Add amount to balance ===> ' , account.credit(5000));
  console.log('Debit amount remainder ===> ' , account.debit(19000));
  console.log('Transfer to another ===> ' , account.transferTo(anotherAccount,500));
  console.log('Another account new balance ===> ' , anotherAccount.getBalance());
  console.log('\n Latest data for base account as string \n ' , account.toString());
  