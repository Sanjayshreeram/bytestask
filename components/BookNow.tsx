"use client"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime"
import { Router } from "next/router"

  
  export function AlertDialogDemo() {
    
    //this number is radom specify our original number here 
    const whatsappNumber = '9253467892'; 

    const handleRedirect = () => {
     
      window.location.href = `https://wa.me/${whatsappNumber}`;
    };
  
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="bg-green-400">BOOK NOW </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Want to contact us </AlertDialogTitle>
            <AlertDialogDescription>
           Click yes to connect with Us.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleRedirect}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  