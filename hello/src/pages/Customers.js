import { useEffect, useState } from "react";
export default function Customers() {
  const [customers, setCustomers] = useState();
  useEffect(() => {
    fetch("http://localhost:8000/api/customers/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCustomers(data.customers);
      });
  }, []);
  return (
    <>
      {customers
        ? customers.map((customer) => {
            <p>Here is a customer!</p>;
            return <p>{customer.name}</p>;
          })
        : null}
    </>
  );
}
