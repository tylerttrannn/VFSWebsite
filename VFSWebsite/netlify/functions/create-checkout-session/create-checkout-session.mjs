import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export default async (request, context) => {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Missing STRIPE_SECRET_KEY');
      throw new Error('Missing Stripe secret key.');
    }

    const body = await request.json();
    console.log('Incoming body:', body);

    const lineItems = body.lineItems;

    if (!Array.isArray(lineItems) || lineItems.length === 0) {
      console.error("Missing or invalid lineItems.");
      throw new Error("Missing or invalid lineItems.");
    }

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems.filter(item => item.quantity > 0),
      mode: "payment",
      success_url: `${request.headers.get("origin")}/success`,
      cancel_url: `${request.headers.get("origin")}/cancel`,      
      allow_promotion_codes: true, 
    });

    console.log('Stripe session created:', session.url);

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Stripe Checkout session error:', error.message);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
};
