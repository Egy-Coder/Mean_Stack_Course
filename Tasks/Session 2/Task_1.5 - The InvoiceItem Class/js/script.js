var InvoiceItem = /** @class */ (function () {
    function InvoiceItem(id, description, quantity, unitPrice) {
        this.id = id;
        this.description = description;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
    }
    InvoiceItem.prototype.getId = function () {
        return this.id;
    };
    InvoiceItem.prototype.getDescription = function () {
        return this.description;
    };
    InvoiceItem.prototype.getQuantity = function () {
        return this.quantity;
    };
    InvoiceItem.prototype.setQuantity = function (qnt) {
        this.quantity = qnt;
    };
    InvoiceItem.prototype.getUnitPrice = function () {
        return this.unitPrice;
    };
    InvoiceItem.prototype.setUnitPrice = function (unitPrice) {
        this.unitPrice = unitPrice;
    };
    InvoiceItem.prototype.getTotal = function () {
        var total = this.unitPrice * this.quantity;
        return total;
    };
    InvoiceItem.prototype.toString = function () {
        return "\n                    Id : ".concat(this.id, "  \n                    Description : ").concat(this.description, "  \n                    Quantity : ").concat(this.quantity, " \n                    UnitPrice : ").concat(this.unitPrice, " \n                    ");
    };
    return InvoiceItem;
}());
// the initial invoice price = 7500
var invoice = new InvoiceItem("invoice-1", "recording invoice data", 50, 150);
// Output
console.log('ID ===> ', invoice.getId());
console.log('Description ===> ', invoice.getDescription());
console.log('Quantity ===> ', invoice.getQuantity());
console.log('Unit Price ===> ', invoice.getUnitPrice());
console.log('Total ===> ', invoice.getTotal());
// Set Quantity
invoice.setQuantity(70);
// Set Unit Price
invoice.setUnitPrice(170);
// Output
console.log('\n new values as string after setting (Quantity/UnitPrice) \n ', invoice.toString());
