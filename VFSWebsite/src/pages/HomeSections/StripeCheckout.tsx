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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Separator } from "@/components/ui/separator"
 

export default function StripeCheckout() {


    const [counter, setCounter] = useState(0); 
    const [studentCounter, setStudentCounter] = useState(0); 
    
    const INDUSTRY_PRICE = 25;
    const STUDENT_PRICE = 10;
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
                  price: "price_1RK8Q4GgKRzpwlpovxqWJ1kL", // $25 Industry Professional
                  quantity: counter,
                },
                {
                  price: "price_1RK11KGgKRzpwlpoFnNXzNOd", // $10 Student
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
            <div className = "flex flex-row space-x-14 ">
            <Card className="w-[450px] sm:w-[450px] md:w-[550px] lg:w-[850px] ">
                <CardHeader>
                    <CardTitle>Purchase Tickets</CardTitle>
                    <CardDescription>Select your tickets for the VFS Career Networking Night</CardDescription>
                </CardHeader>
                <CardContent className = "space-y-3">
                <div className="grid w-full gap-4">
                    <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col">
                        <Label className="text-md font-medium">Industry Professional</Label>
                        <Label className="text-muted-foreground">$25.00</Label>
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
                        <Label className="text-muted-foreground">$10.00</Label>
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
