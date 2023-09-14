'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard' &&  '/pages/register' && '/pages/alter') {
            return NextResponse.redirect(urlLogin);
        }    

        if (request.nextUrl.pathname === '/' && token)  
         return NextResponse.redirect('/pages/dashboard' &&  '/pages/register' && '/pages/alter');
        }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard', '/pages/register', '/pages/alter']
};