class InvoiceItem {

    private id: string;
    private description: string;
    private quantity: number;
    private unitPrice: number;
  
    constructor(id: string, description: string, quantity: number, unitPrice: number) {
      this.id = id;
      this.description = description;
      this.quantity = quantity;
      this.unitPrice = unitPrice;
    }
  
    getId(): string {
      return this.id;
    }
  
    getDescription(): string {
      return this.description;
    }
  
    getQuantity(): number {
      return this.quantity;
    }

    setQuantity(qnt: number): void {
      this.quantity = qnt;
    }
  
    getUnitPrice(): number {
      return this.unitPrice;
    }
  

    setUnitPrice(unitPrice:number): void {
      this.unitPrice  = unitPrice;
    }


    getTotal(): number {
      let total = this.unitPrice * this.quantity;
      return total;
    }

    toString(): string {
      return `
                    Id : ${this.id}  
                    Description : ${this.description}  
                    Quantity : ${this.quantity} 
                    UnitPrice : ${this.unitPrice} 
                    `;
    }
  }


  
  // the initial invoice price = 7500
  var invoice = new InvoiceItem("invoice-1", "recording invoice data", 50 , 150); 
  

  // Output
  console.log('ID ===> ' , invoice.getId());
  console.log('Description ===> ' , invoice.getDescription());
  console.log('Quantity ===> ' , invoice.getQuantity());
  console.log('Unit Price ===> ' , invoice.getUnitPrice());
  console.log('Total ===> ' , invoice.getTotal());

  // Set Quantity
  invoice.setQuantity(70);

  // Set Unit Price
  invoice.setUnitPrice(170);

  // Output
  console.log('\n new values as string after setting (Quantity/UnitPrice) \n ' , invoice.toString());
  