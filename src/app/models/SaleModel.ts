export class SaleModel {

    public id?: string;
    public names?: string;
    public dateSale?: Date;
    public total?: number;

  
    public constructor(id?: string, names?: string, dateSale?: Date, total?: number){
      this.id = id;
      this.names = names;
      this.dateSale = dateSale;
      this.total = total;
    }
  }
  