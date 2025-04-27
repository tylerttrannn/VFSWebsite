import { Button } from "@/components/ui/button";

export default function StripeCheckout() {
    async function handleCheckout() {
        try {
            const response = await fetch("/.netlify/functions/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    priceId: "price_1RHWxgGgKRzpwlponZH233qG", 
                }),
            });

            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; 
            } else {
                console.error("No URL returned from Stripe checkout session.");
            }
        } catch (error) {
            console.error("Error during Stripe checkout:", error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center bg-grey min-h-[220px]">
            <p>Stripe Checkout Test</p>
            <Button onClick={handleCheckout}>Go to Checkout</Button>
        </div>
    );
}
