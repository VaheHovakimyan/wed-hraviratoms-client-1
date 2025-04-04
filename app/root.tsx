import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "react-router";

import "./app.css";
import React from "react";
import RoutesComponent from "~/components/RoutesComponent";
import Footer from "~/components/Footer";
import type { Route } from "./+types/root";

export function meta({}: Route.MetaArgs) {
    return [
      { title: "Hraviratoms.com" },
      { name: "description", content: "Welcome to wed invitation!" },
    ];
  }


export function Layout({ children }: { children: React.ReactNode }) {
    // @ts-ignore
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
                <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>

                {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
                {/*<link rel="preconnect" href="https://fonts.gstatic.com"/>*/}
                {/*<link href="https://fonts.googleapis.com/css2?family=Engagement&display=swap" rel="stylesheet"/>*/}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Engagement&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
                    rel="stylesheet" />
                <Meta />
                <Links />
            </head>
            <body>
                <div className="flex flex-col justify-center bg-blue-50 m-auto text-cyan-950" style={{
                    fontFamily: "Lato",
                    fontWeight: 500,
                    fontStyle: 'normal',
                }}>
                    <div className="max-w-[1440px] m-auto">
                        {children}
                        <ScrollRestoration />
                        <Scripts />
                        <RoutesComponent />
                        {/* <CallTo /> */}
                        {/* <Sound /> */}
                        <Footer />
                        {/* <FooterHraviratoms /> */}
                        
                    </div>
                </div>

                <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            </body>
        </html>
    );
}

export default function App() {
    return <Outlet />;
}
