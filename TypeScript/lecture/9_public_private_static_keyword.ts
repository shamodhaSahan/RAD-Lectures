
// fields are default public
// private
class Customer {
    public id: number;
    private name: string;
    public isAdmin: boolean;
    constructor(id: number, name: string, isAdmin: boolean) {
      this.id = id;
      this.name = name;
      this.isAdmin = isAdmin;
    }
  
    getName(){
      return this.name;
    }
  }
  
  let customer_1 = new Customer(1, "kamal", true);
  console.log(customer_1.id);
  
  // wrong
  // console.log(customer_1.name);
  
  console.log(customer_1.getName());

  //--------------------------------------------------
  // static with singletone
  
  class DBConnection {
    private static connection: string;
  
    private constructor(connection: string) {
      DBConnection.connection = connection;
    }
  
    static getConnection(){
      return DBConnection.connection?
      DBConnection.connection:
      new DBConnection("connection");
    }
  }
  