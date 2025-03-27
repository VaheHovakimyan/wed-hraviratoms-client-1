import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, Link, Meta, Links, ScrollRestoration, Scripts, Outlet } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect, Fragment as Fragment$1 } from "react";
import AOS from "aos";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function RoutesComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 justify-center items-center pt-20 pb-5", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", style: { width: "100%", marginLeft: "auto", marginRight: "auto" }, children: /* @__PURE__ */ jsx("h2", { style: {
      width: "100%",
      margin: "auto",
      borderTop: "1px solid black",
      padding: "8px",
      textAlign: "center",
      maxWidth: "300px",
      textDecoration: "underline"
    }, children: "Home" }) }),
    /* @__PURE__ */ jsx(Link, { to: "/locations", style: { width: "100%" }, children: /* @__PURE__ */ jsx("h2", { style: {
      width: "100%",
      margin: "auto",
      borderTop: "1px solid black",
      borderBottom: "1px solid black",
      padding: "8px",
      textAlign: "center",
      maxWidth: "300px"
    }, children: "Locations" }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 justify-center items-center py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "pb-4", style: {
      margin: "0 auto",
      borderBottom: "1px solid black",
      width: "120px",
      textAlign: "center",
      fontSize: "28px"
    }, children: "H & L" }),
    /* @__PURE__ */ jsx("p", { className: "text-center", children: " 24.02.2025" })
  ] });
}
function meta$1({}) {
  return [{
    title: "Hraviratoms.com"
  }, {
    name: "description",
    content: "Welcome to wed invitation!"
  }];
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
      }), /* @__PURE__ */ jsx("link", {
        href: "https://unpkg.com/aos@2.3.1/dist/aos.css",
        rel: "stylesheet"
      }), /* @__PURE__ */ jsx("link", {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      }), /* @__PURE__ */ jsx("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      }), /* @__PURE__ */ jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Engagement&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap",
        rel: "stylesheet"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx("div", {
        className: "flex flex-col justify-center bg-blue-50 m-auto text-cyan-950",
        style: {
          fontFamily: "Lato",
          fontWeight: 500,
          fontStyle: "normal"
        },
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-[1440px] m-auto",
          children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {}), /* @__PURE__ */ jsx(RoutesComponent, {}), /* @__PURE__ */ jsx(Footer, {})]
        })
      }), /* @__PURE__ */ jsx("script", {
        src: "https://unpkg.com/aos@2.3.1/dist/aos.js"
      })]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: root,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const main_image = "/assets/Dana-Whitley3-B_UJVTMR.jpg";
function Welcome() {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-5 m-auto p-16", children: [
    /* @__PURE__ */ jsx("img", { src: main_image, alt: "main_image" }),
    /* @__PURE__ */ jsxs("h1", { className: "text-5xl", style: {
      fontFamily: "Lato",
      fontWeight: 300,
      fontStyle: "normal",
      fontSize: "48px",
      letterSpacing: "1.8px",
      textAlign: "center"
    }, children: [
      "HAMLET ",
      /* @__PURE__ */ jsx("br", {}),
      "& ",
      /* @__PURE__ */ jsx("br", {}),
      "LIANNA"
    ] })
  ] });
}
function TimelineElement({ item }) {
  const { mainTitle, date, hour } = item;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 justify-center items-center", children: [
    /* @__PURE__ */ jsx("h3", { className: "uppercase", children: mainTitle }),
    /* @__PURE__ */ jsx("h2", { className: "uppercase", children: date }),
    /* @__PURE__ */ jsx("span", { className: "uppercase", children: hour })
  ] });
}
function meta({}) {
  return [{
    title: "Hraviratoms.com"
  }, {
    name: "description",
    content: "Welcome to wed invitation!"
  }];
}
const timeline = [{
  id: 0,
  mainTitle: "Հարսի տուն",
  date: "Monday, 25 September of 2025",
  hour: "12:00"
}, {
  id: 1,
  mainTitle: "Պսակադրության արարողություն",
  date: "Monday, 25 September of 2025",
  hour: "14:00"
}, {
  id: 2,
  mainTitle: "Հարսանյանց Հանդիսություն",
  date: "Monday, 25 September of 2025",
  hour: "17:30"
}, {
  id: 3,
  mainTitle: "Ավարտ",
  date: "Monday, 25 September of 2025",
  hour: "23:00"
}];
const home = withComponentProps(function Home() {
  const tableIndexes = [1, 2, 3, 4];
  const guestIndexes = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    AOS.init();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx("div", {
      "data-aos": "fade-up",
      "data-aos-easing": "ease-in-sine",
      "data-aos-duration": "800",
      children: /* @__PURE__ */ jsx(Welcome, {})
    }), /* @__PURE__ */ jsxs("div", {
      className: "flex flex-col gap-4 justify-center items-center m-auto text-center py-10",
      children: [/* @__PURE__ */ jsx("h2", {
        className: "text-3xl",
        children: "Օրվա ծրագիր ❤️"
      }), /* @__PURE__ */ jsx("p", {
        children: "September 15, 2025"
      })]
    }), /* @__PURE__ */ jsx("div", {
      className: "flex flex-col gap-[140px] items-center justify-center",
      children: timeline.map((item, index) => {
        return /* @__PURE__ */ jsx("div", {
          "data-aos": `fade-${index % 2 === 0 ? "right" : "left"}`,
          "data-aos-offset": "200",
          "data-aos-easing": "ease-in-sine",
          "data-aos-duration": "700",
          children: /* @__PURE__ */ jsx(TimelineElement, {
            item
          }, item.id)
        });
      })
    }), /* @__PURE__ */ jsx("div", {
      className: "m-auto text-center pt-20",
      children: tableIndexes.map((item, index) => {
        return /* @__PURE__ */ jsx(Fragment$1, {
          children: /* @__PURE__ */ jsxs("div", {
            "data-aos": `fade-${index % 2 === 0 ? "right" : "left"}`,
            "data-aos-offset": "200",
            "data-aos-easing": "ease-in-sine",
            "data-aos-duration": "700",
            children: [/* @__PURE__ */ jsxs("h3", {
              className: "uppercase p-6",
              children: ["Table ", item]
            }), guestIndexes.map((item2) => {
              return /* @__PURE__ */ jsxs("p", {
                className: "py-1",
                children: ["Guest Gustavo ", item2]
              });
            })]
          })
        }, item);
      })
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
function LocationComponent({ location }) {
  const { title, image, address, telephoneNumber, mapLink } = location;
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-5 justify-center items-center py-20", children: [
    /* @__PURE__ */ jsx("h2", { className: "uppercase", style: {
      letterSpacing: "1.8px",
      fontSize: "28px"
    }, children: title }),
    /* @__PURE__ */ jsx("img", { id: "imges", src: image, alt: "location_image" }),
    /* @__PURE__ */ jsx("h2", { children: address }),
    /* @__PURE__ */ jsx("p", { style: {
      letterSpacing: "1.8px",
      fontSize: "18px"
    }, children: telephoneNumber }),
    /* @__PURE__ */ jsx("a", { href: `/`, children: /* @__PURE__ */ jsx("button", { style: {
      width: "150px",
      padding: "10px",
      background: "green",
      color: "white",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#217180"
    }, children: "Քարտեզ" }) })
  ] });
}
const locationsData = [{
  id: 0,
  title: "Հարսի տուն",
  image: "2776786976.jpg",
  address: "Վաղարշապատ, Չարենց փողոց, 15",
  telephoneNumber: "(099) 999999",
  mapLink: "string"
}, {
  id: 1,
  title: "Հռիփսիմե եկեղեցի",
  image: "0b44886a-4ebd-11ec-95d5-1e04f738edcf.800x600.jpg",
  address: "Մեսրոպ Մաշտոց 1",
  telephoneNumber: "(099) 999999",
  mapLink: "string"
}, {
  id: 2,
  title: "Փեսայի տուն",
  image: "morgan-blake-7-1024x732.webp",
  address: "Վաղարշապատ, Մյասնիկյան փողոց, 12",
  telephoneNumber: "(099) 999999",
  mapLink: "string"
}, {
  id: 3,
  title: "Ռեստորան Նոր Դվին",
  image: "82526439_225698741783968_9124258773398384256_n.jpg",
  address: "M-3 մայրուղի, 12",
  telephoneNumber: "(099) 999999",
  mapLink: "string"
}];
const locations = withComponentProps(function Locations() {
  useEffect(() => {
    AOS.init();
  }, []);
  return /* @__PURE__ */ jsx(Fragment, {
    children: locationsData.map((location, index) => {
      return /* @__PURE__ */ jsx("div", {
        "data-aos": `fade-${index % 2 === 0 ? "right" : "left"}`,
        "data-aos-offset": "450",
        "data-aos-easing": "ease-in-sine",
        "data-aos-duration": "1000",
        children: /* @__PURE__ */ jsx(LocationComponent, {
          location
        }, location.id)
      });
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: locations
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-CBlBqa-R.js", "imports": ["/assets/chunk-K6CSEXPM-CIyuW5BP.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CXII__jq.js", "imports": ["/assets/chunk-K6CSEXPM-CIyuW5BP.js", "/assets/with-props-DT7EmSvL.js"], "css": ["/assets/root-BltmRH4r.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-C-Up6LgN.js", "imports": ["/assets/with-props-DT7EmSvL.js", "/assets/chunk-K6CSEXPM-CIyuW5BP.js", "/assets/aos-Dhgw-DHB.js"], "css": ["/assets/aos-DvB2Xm2x.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 }, "routes/locations": { "id": "routes/locations", "parentId": "root", "path": "locations", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/locations-Cnh4HR2J.js", "imports": ["/assets/with-props-DT7EmSvL.js", "/assets/chunk-K6CSEXPM-CIyuW5BP.js", "/assets/aos-Dhgw-DHB.js"], "css": ["/assets/aos-DvB2Xm2x.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-7930a31d.js", "version": "7930a31d" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  },
  "routes/locations": {
    id: "routes/locations",
    parentId: "root",
    path: "locations",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routes,
  ssr
};
