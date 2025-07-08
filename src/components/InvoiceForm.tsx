import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Send, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { cn } from "@/lib/utils"
import { toast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from "react"

const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, "Invoice number is required"),
  customerName: z.string().min(2, "Customer name must be at least 2 characters"),
  customerEmail: z.string().email("Please enter a valid email address"),
  amount: z.string().min(1, "Amount is required").refine((val) => {
    const num = parseFloat(val);
    return !isNaN(num) && num > 0;
  }, "Amount must be a positive number"),
  date: z.date({
    required_error: "Invoice date is required",
  }),
  description: z.string().min(10, "Description must be at least 10 characters"),
})

type InvoiceFormData = z.infer<typeof invoiceSchema>

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL

export function InvoiceForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const form = useForm<InvoiceFormData>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      invoiceNumber: "",
      customerName: "",
      customerEmail: "",
      amount: "",
      description: "",
    },
  })

  async function onSubmit(data: InvoiceFormData) {
    setIsSubmitting(true)
    
    const invoiceData = {
      invoiceNumber: data.invoiceNumber,
      customerName: data.customerName,
      customerEmail: data.customerEmail,
      amount: parseFloat(data.amount),
      date: format(data.date, "yyyy-MM-dd"),
      description: data.description,
      timestamp: new Date().toISOString(),
    }

    console.log("Sending invoice data to n8n:", invoiceData)
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(invoiceData),
      })

      if (response.ok) {
        toast({
          title: "Invoice Sent Successfully! 🎉",
          description: `Invoice #${data.invoiceNumber} for ${data.customerName} has been processed and sent to n8n.`,
        })
        
        // Reset form after successful submission
        form.reset()
      } else {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
    } catch (error) {
      console.error("Error sending invoice to n8n:", error)
      toast({
        title: "Error Sending Invoice",
        description: "There was an error processing your invoice. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="min-h-screen squid-game-bg flex flex-col"
      style={{
        backgroundImage: "url('/download (10).jpeg')",
      }}
    >
      <div className="flex-1 flex items-center justify-center p-4" style={{
        background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(139, 0, 0, 0.1) 25%, rgba(0, 0, 0, 0.2) 50%, rgba(139, 0, 0, 0.1) 75%, rgba(0, 0, 0, 0.3) 100%)'
      }}>
        <div className="squid-game-content w-full max-w-3xl">
          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row bg-black/60 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border-2 border-red-600">
            
            {/* Left side - Squid Game themed section */}
            <div className="lg:w-1/2 squid-game-card p-6 flex flex-col justify-center text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/60"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-6 leading-tight squid-game-title">
                  INVOICE<br />
                  <span className="squid-game-subtitle">GENERATION</span>
                </h2>
                <p className="text-red-100 mb-8 text-lg leading-relaxed">
                  Create your invoices with precision and speed. 
                  Welcome to the ultimate billing experience.
                </p>
                <div className="space-y-4">
                  <div className="text-red-100">
                    <h3 className="font-bold mb-2 squid-game-subtitle">GAME FEATURES</h3>
                    <ul className="space-y-1 text-sm">
                      <li>• INVOICE GENERATION</li>
                      <li>• CLIENT MANAGEMENT</li>
                      <li>• PAYMENT TRACKING</li>
                      <li>• ANALYTICS & REPORTS</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Additional Images for decoration */}
              <div className="absolute bottom-4 right-4 w-20 h-20 opacity-30">
                <img 
                  src="/Round 6.jpeg" 
                  alt="Round 6" 
                  className="w-full h-full object-cover rounded-full border-2 border-red-600"
                />
              </div>
            </div>

            {/* Right side - Form */}
            <div className="w-full lg:w-1/2 p-4 bg-black/80">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl font-bold squid-game-title">CREATE INVOICE</h1>
                <button className="text-red-400 hover:text-red-300 transition-colors">
                  <X className="h-6 w-6" />
                </button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="invoiceNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="squid-game-label">INVOICE NUMBER</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Enter invoice number" 
                              className="squid-game-input"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="squid-game-label">INVOICE DATE</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "w-full justify-start text-left font-normal squid-game-input",
                                    !field.value && "text-gray-400"
                                  )}
                                >
                                  <CalendarIcon className="mr-2 h-4 w-4" />
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0 bg-black border-red-600" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => date < new Date("1900-01-01")}
                                initialFocus
                                className="text-white"
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage className="text-red-400" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="customerName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="squid-game-label">CUSTOMER NAME</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter customer name" 
                            className="squid-game-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="customerEmail"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="squid-game-label">CUSTOMER EMAIL</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="Enter customer email" 
                            className="squid-game-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="amount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="squid-game-label">AMOUNT ($)</FormLabel>
                        <FormControl>
                          <Input 
                            type="number"
                            step="0.01"
                            placeholder="Enter amount" 
                            className="squid-game-input"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="squid-game-label">DESCRIPTION</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Enter description..."
                            className="min-h-[100px] squid-game-input resize-none"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage className="text-red-400" />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full squid-game-button py-3 px-6 rounded-lg transition-all duration-200 pulse-red"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    {isSubmitting ? "SENDING..." : "SEND INVOICE"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom infinite scrolling images */}
      <div className="bg-black/90 py-12 border-t-2 border-red-600">
        <div className="infinite-scroll">
          <div className="infinite-scroll-content">
            <img src="/ahiretlik babeyle ben.jpeg" alt="Squid Game Character" />
            <img src="/download (10).jpeg" alt="Squid Game Scene" />
            <img src="/Round 6.jpeg" alt="Round 6" />
            <img src="/squid game 2025 trending wallpaper.jpeg" alt="Squid Game Wallpaper" />
            <img src="/squid game s2 player 222 kim jun-hee __ jo yuri coquette icon 🎀.jpeg" alt="Player 222" />
            <img src="/The Salesman Squid Game S2.jpeg" alt="The Salesman" />
            {/* Duplicate for seamless loop */}
            <img src="/ahiretlik babeyle ben.jpeg" alt="Squid Game Character" />
            <img src="/download (10).jpeg" alt="Squid Game Scene" />
            <img src="/Round 6.jpeg" alt="Round 6" />
            <img src="/squid game 2025 trending wallpaper.jpeg" alt="Squid Game Wallpaper" />
            <img src="/squid game s2 player 222 kim jun-hee __ jo yuri coquette icon 🎀.jpeg" alt="Player 222" />
            <img src="/The Salesman Squid Game S2.jpeg" alt="The Salesman" />
            {/* Additional duplicates for smoother animation */}
            <img src="/ahiretlik babeyle ben.jpeg" alt="Squid Game Character" />
            <img src="/download (10).jpeg" alt="Squid Game Scene" />
            <img src="/Round 6.jpeg" alt="Round 6" />
            <img src="/squid game 2025 trending wallpaper.jpeg" alt="Squid Game Wallpaper" />
            <img src="/squid game s2 player 222 kim jun-hee __ jo yuri coquette icon 🎀.jpeg" alt="Player 222" />
            <img src="/The Salesman Squid Game S2.jpeg" alt="The Salesman" />
          </div>
        </div>
      </div>
    </div>
  )
}
