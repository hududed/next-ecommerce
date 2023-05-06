import Stripe from "stripe";

const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });
  const products = await stripe.products.list();
};

export default async function Home() {
  const products = await getProducts();
  return (
    <main>
      <h1>Welcome to the beginning, where time did not exist.</h1>
    </main>
  );
}
