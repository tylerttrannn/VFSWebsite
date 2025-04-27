const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async (request, context) => {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error('Missing STRIPE_SECRET_KEY');
      throw new Error('Missing Stripe secret key.');
    }

    const body = await request.json();
    console.log('Incoming body:', body);

    const priceId = body.priceId;
    if (!priceId) {
      console.error('Missing priceId in request body.');
      throw new Error('Missing priceId.');
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${request.headers.get('origin')}/?success=true`,
      cancel_url: `${request.headers.get('origin')}/?canceled=true`,
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
