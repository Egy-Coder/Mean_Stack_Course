var Account = /** @class */ (function () {
    function Account(id, name, balance) {
        if (balance === void 0) { balance = 0; }
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    Account.prototype.getId = function () {
        return this.id;
    };
    Account.prototype.getName = function () {
        return this.name;
    };
    Account.prototype.getBalance = function () {
        return this.balance;
    };
    Account.prototype.credit = function (amount) {
        this.balance += amount;
        return this.balance;
    };
    Account.prototype.debit = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.transferTo = function (another, amount) {
        if (amount <= this.balance) {
            another.balance += amount;
            this.balance -= amount;
        }
        else {
            console.log("Amount exceeded balance");
        }
        return this.balance;
    };
    Account.prototype.toString = function () {
        return "\n                    Id : ".concat(this.id, "  \n                    Name : ").concat(this.name, "  \n                    Balance : ").concat(this.balance, " \n                    ");
    };
    return Account;
}());
// the initial account balance = 15000
var account = new Account("acc-1", "account-1", 15000);
// another account
var anotherAccount = new Account("acc-2", "account-2", 50000);
// Output
console.log('ID ===> ', account.getId());
console.log('Name ===> ', account.getName());
console.log('Initial balance ===> ', account.getBalance());
console.log('Add amount to balance ===> ', account.credit(5000));
console.log('Debit amount remainder ===> ', account.debit(19000));
console.log('Transfer to another ===> ', account.transferTo(anotherAccount, 500));
console.log('Another account new balance ===> ', anotherAccount.getBalance());
console.log('\n Latest data for base account as string \n ', account.toString());
