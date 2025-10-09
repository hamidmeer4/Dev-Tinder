const products = [
  { id: 1, name: "Laptop", price: 130000 },
  { id: 2, name: "Keyboard", price: 1230 },
  { id: 3, name: "IPhone 17 Air", price: 655000 },
  { id: 4, name: "Display", price: 532000 },
];

// function login(req, res) {
//   const { username } = req.body;

//   if (!username) {
//     res.status(401).json({ message: "Unauthorizd person" });
//   }
//   res.json({ message: "Login Successfully" });
// }

function getProducts(req, res) {
  return res.json({ data: products });
}

function getProductById(req, res) {
  const productID = parseInt(req.params.id);
  const product = products.find((product) => product.id === productID);

  if (!product) {
    res.status(401).json("Product id Wrng ");
  } else {
    res.json({
      message: "Product Successfully Identify",
      data: product,
    });
  }
}

function addProducts(req,res) {
    const body = req.body;
    products.push({
      id: products.length + 1,
      name: body.name,
      price: body.price,
    })

    res.status(202).json({
        message: "Product Successfully Added",
        data: products,
    })
}

function updateProduct(req, res) {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: "Product not found" });

  product.name = req.body.name || product.name;
  product.price = req.body.price || product.price;

  res.json({ message: "Product updated successfully", data: product });

}

function deleteProduct(req, res) {
  const proId = parseInt(req.params.id);
  products = products.filter((p) => p.id !== proId);

  res.json({
    message: "Product Deleted Successfully",
    data: products,
  });
}



module.exports = {
  getProducts,
  getProductById,
  addProducts,
  updateProduct,
  deleteProduct,
};