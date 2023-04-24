const stripe = require("stripe")("sk_test_51L1dg0B5WMGrt28ljBaq5TrFu3MB5OzqXJNFS1nPwnlWfN7ZQ7HWDQC9AEfVJasxPkQnKJ8GB83vmbaK3BB4pznz005422JROA");

export default async (req, res) => {
  const { email, items } = req.body;

  console.log(email, items);
  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: "usd",
      unit_amount: item.price * 100,
     product_data:{
        name: item.title,
        description: item.description,
     }
    },
  })); 

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: transformedItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/checkout",
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image)),
    },
  });

  res.status(200).json({ id: session.id });
};
