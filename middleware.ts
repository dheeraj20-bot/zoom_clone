import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const protectRoutes = createRouteMatcher([
    '/',
    './upcoming',
    '/previous',
    '/recordings',
    'personal-room',
    '/meetings(.*)'
])

export default clerkMiddleware((auth,req)=>{
     if(protectRoutes(req)) auth().protect()
});
 
export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next).*)","/(api|trpc)(.*)"
  ]
};