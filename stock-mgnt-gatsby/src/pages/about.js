import * as React from "react"
import Layout from "../components/layout";
var products = [
  { name: "Samsung TV", price: 20000 },
  { name: "Audioengine A2+", price: 10000 },
  { name: "Huawei P30", price: 20000 },
]

function AboutPage() {
  let total = 0;
  for(let p in products) {
    total += products[p].price
  }

  function addProduct() {
    alert("Add Product")
  }

  return (
    <Layout>

      <h1>About Page</h1>
      <div>
        <div>
        Name: <input type="text" id="name"/>{" "}
        Price: <input type="number" id="price" />{" "}
        <button onClick={addProduct}>+ ADD</button>
        </div>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th><th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(p => (
                <tr><td>{p.name}</td><td>{p.price}</td></tr>
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>{total}</td>
            </tr>
          </tfoot>
        </table>
      </div>

    </Layout>
  )
}

export default AboutPage
