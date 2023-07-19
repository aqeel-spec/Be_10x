"use client"

import { Checkbox } from "@/ui/checkbox";

export function CheckboxWithText(list : {list : string[]}) {

  return (
    <div className=" grid md:grid-cols-2 grid-cols-1  ">
        {
            list.list.map((li, index) => (
                <div key={index} className="items-top flex space-x-2 text-black_02 bg-black_04 m-4 p-4 w-fit ">
                    <Checkbox id="terms1" className="bg-white border-none active:bg-white"  />
                    <div className="grid gap-1.5 leading-none">
                        <label
                        htmlFor="terms1"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                         {li}
                        </label>
                        {/* <p className="text-sm text-muted-foreground">
                        You agree to our Terms of Service and Privacy Policy.
                        </p> */}
                    </div>
                </div>
            ))
        }
    </div>
  )
}
