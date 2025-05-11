import * as React from "react"
 
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
 
export default function StripeCheckout() {


    const [counter, setCounter] = useState(0); 
    const [studentCounter, setStudentCounter] = useState(0); 
    
    const INDUSTRY_PRICE = 20;
    const STUDENT_PRICE = 5;
    const total = counter * INDUSTRY_PRICE + studentCounter * STUDENT_PRICE;
  

    async function handleCheckout() {
        try {
          const response = await fetch("/.netlify/functions/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              lineItems: [
                {
                  price: "price_1RM04JKClKMtvvIEuJn2Cbpl", // $20 Industry Professional
                  quantity: counter,
                },
                {
                  price: "price_1RM04SKClKMtvvIEEssN0SsL", // $5 Student
                  quantity: studentCounter,
                },
              ],
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
        <div className="flex flex-col justify-center items-center min-h-[220px] pt-10 pb-10 0  ">             
            <div className="flex flex-col gap-8 md:flex-row md:gap-14">
            <Card className="w-full max-w-[450px] sm:max-w-[550px] lg:max-w-[850px]">
                <CardHeader>
                    <CardTitle>Purchase Tickets</CardTitle>
                    <CardDescription>Select your tickets for the Aerospace Career Flight Path </CardDescription>
                </CardHeader>
                <CardContent className = "space-y-3">
                <div className="grid w-full gap-4">
                    <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <Label className="text-md font-medium">Industry Professional</Label>
                        <Label className="text-muted-foreground">$20.00</Label>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setCounter(Math.max(counter - 1, 0))}
                        >
                        -
                        </Button>
                        <span className="w-6 text-center">{counter}</span>
                        <Button
                        type="button"
                        variant= "ghost"
                        onClick={() => setCounter(counter + 1)}
                        >
                        +
                        </Button>
                    </div>
                    </div>
                </div>
                <Separator />

                <div className="grid w-full gap-4">
                    <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <Label className="text-md font-medium">Students</Label>
                        <Label className="text-muted-foreground mb-4">$5.00</Label>
                        <Label className="text-muted-foreground">VFS national members eligible for promo code – email membership number or email used to register to vfsatuci@gmail.com</Label>

                    </div>

                    <div className="flex items-center space-x-4">
                        <Button
                        type="button"
                        variant="ghost"
                        onClick={() => setStudentCounter(Math.max(studentCounter - 1, 0))}
                        >
                        -
                        </Button>
                        <span className="w-6 text-center">{studentCounter}</span>
                        <Button
                        type="button"
                        variant= "ghost"
                        onClick={() => setStudentCounter(studentCounter + 1)}
                        >
                        +
                        </Button>
                    </div>
                    </div>
                </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                    <div className="text-lg font-semibold">
                        Total: ${total.toFixed(2)}
                    </div>
                    <Button
                        onClick={handleCheckout}
                        disabled={total === 0}
                    >
                        Get Tickets
                    </Button>
                </CardFooter>

            </Card>
            </div>
        
        
        </div>

    );
}
