"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Blogs } from "@/lib/blogData"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/ui/navigation-menu";
import {useRouter} from "next/navigation";
import { useEffect } from "react"

type Blog = {
    title : string,
    href : string,
    description : string
}

export function NavigationMenuDopdown() {

    const [blogs,setBlogs] = React.useState<Blog[]>()

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await fetch(`/api/blogs`)
                if(res.ok) {
                  const data = await res.json();
                  setBlogs(data.data)
                }
            } catch (error) {
                console.log("something went wrong in api req")
            }
        };
        fetchBlog();
    },[])

    if(blogs) {
        console.log(blogs)
    }

    

    const router = useRouter();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* here we can add more ## __-- NavigationMenuItem --__ ### N */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className={cn("text-black_02  hover:text-black_01 hover:font-bold transiton delay-150 duration-300 p-2 rounded-[4px] hover:bg-black_04")} onClick={() => router.push(`blogs`)} >Blogs</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] bg-black_03  gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              { blogs && blogs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.title.toLowerCase()}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li className=" hover:bg-black_04 text-black_02 ">
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block text-black_02 select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
