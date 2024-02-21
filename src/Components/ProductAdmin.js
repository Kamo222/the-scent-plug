import React, { useContext, useState } from 'react'
import { StateContext } from './State/context';
import { doc, database, collection, addDoc, deleteDoc } from './firebase';

const ProductAdmin = () => {

    const { products, setReload } = useContext(StateContext);
    const [newProductName, setNewProductName] = useState("");
    const [newProductDescription, setNewProductDescription] = useState("");
    const [newProductPrice, setNewProductPrice] = useState("");
    const [newProductQuantity, setNewProductQuantity] = useState("");

    const productRef = collection(database, "products")

    const addProduct = async () => {
        await addDoc(productRef, {
            name: newProductName,
            description: newProductDescription,
            price: newProductPrice,
            quantity: newProductQuantity,
            image: "http://localhost:3000/static/media/perfume.f2225b8f9e3393a9ae6a.jpg",
            rating: 4,
            instock: true,
            reviews: []
        })
        .then((res) => console.log("response", res))
        .catch((error) => alert(error))

        setReload(prev => !prev);
    }

    const deleteProduct = async (id) => {
        await deleteDoc(doc(database, "products", id))
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            alert(error)
        })

        setReload(prev => !prev);
    }

  return (
    <div id="login" className="row justify-content-center p-5">
        <div class="col-lg-10 bg-dark d-flex flex-column align-items-start p-5">

            <div class="heading-section">
                <h4>Add Product</h4>
                <div className="d-flex flex-column ">
                    <input onChange={(event) => setNewProductName(event.target.value)} className="mb-3" type="text" placeholder="Name" />
                    <input onChange={(event) => setNewProductDescription(event.target.value)} className="mb-3" type="text" placeholder="Description" />
                    <input onChange={(event) => setNewProductPrice(event.target.value)} className="mb-3" type="number" placeholder="Price" />
                    <input onChange={(event) => setNewProductQuantity(event.target.value)} className="" type="number" placeholder="Quantity" />
                    <button className="mt-5" onClick={addProduct}>Add</button>
                </div>
            </div>
              
            <div class="heading-section">
                <h4>Products</h4>
            </div>
            <div className="d-flex flex-column align-items-start">
                
            </div>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Rating</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) => (
                            <tr>
                                <th scope="row">{product.name}</th>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                                <td>{product.rating}</td>
                                <td><button>edit</button></td>
                                <td><button onClick={() => deleteProduct(product.id)}>delete</button></td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>

                
                
                
              
            </div>
    </div>
  )
}

export default ProductAdmin