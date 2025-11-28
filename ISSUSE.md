# Infinite Loop Requests Causing Page Crash When Integrating Klaviyo in Next.js

## Let me describe my scenario again:
1. I am currently migrating my Shopify Online Store (liquid theme) using a headless development approach
2. My new headless site uses Next.js App Router v16
3. I have carefully reviewed the relevant Klaviyo [development documentation](https://developers.klaviyo.com/en/docs/javascript_api)


## Here are the detailed steps I took to integrate:
I added a Klaviyo.js script tag in the `src/app/layout.tsx` file as follows:

```tsx
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Store",
  description: "Shopify Headless Storefront"
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          async type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/PUBLIC_API_KEY/klaviyo.js"
        />
      </body>
    </html>
  )
}
```

When I start my project and open the browser, clicking [Console] — [Network], I can see that the Klaviyo.js script, which executes immediately after page load, keeps sending network requests infinitely and frantically until my webpage completely crashes.


![](https://cdn.shopify.com/videos/c/o/v/60441f507ba84178a6d7456fac7caf86.mp4)


Below is the server log output from the terminal after starting the Next.js project:

```shell
 GET /services/login_with_shop/authorize?analytics_trace_id=104b0735-f575-4c9a-9ac5-55ff70ddf7d8&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 252ms
 GET /services/login_with_shop/authorize?analytics_trace_id=9a06a8b8-ac55-47e8-a033-eb08fa8f3317&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 36ms
 GET /services/login_with_shop/authorize?analytics_trace_id=85a44aa6-5925-4f23-bbac-2ecde7941b45&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 19ms
 GET /.well-known/appspecific/com.chrome.devtools.json 404 in 37ms
 GET /services/login_with_shop/authorize?analytics_trace_id=d7dcbc1f-c6cc-4f82-8043-303941ffd904&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 412ms
 GET /services/login_with_shop/authorize?analytics_trace_id=db3b665e-194c-4b55-bccf-5e74e00b0b08&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 40ms
 GET /services/login_with_shop/authorize?analytics_trace_id=62b9539b-bdd2-48f4-9aeb-7d3f9e41f5c5&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 27ms
 GET /services/login_with_shop/authorize?analytics_trace_id=9e7e3fee-ff94-4c1d-89d4-95d551c63838&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 29ms
 GET /services/login_with_shop/authorize?analytics_trace_id=595d2903-5c8d-44b3-bdc-6ab8b2f24744&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 26ms
 GET /services/login_with_shop/authorize?analytics_trace_id=0440f2d2-8ab3-4ccc-acf1-1b5c5c220668&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 26ms
 GET /services/login_with_shop/authorize?analytics_trace_id=e30b5143-710a-48bf-9d40-750a8fe1531e&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 47ms
 GET /services/login_with_shop/authorize?analytics_trace_id=4633cc81-001b-47c7-aea2-ac7f1ff19fcc&api_key=5edd9000b933a8fa88c152d1e498531f&compact_layout=true&flow=discount&flow_version=EMAIL_CAPTURE&locale=en&target_origin=http%3A%2F%2Flocalhost%3A3000&require_verification=false 404 in 27ms
```



## Expected Outcomes

1. My online theme store (liquid theme) has been relying on Klaviyo for years. I expect to be able to migrate to the new headless site normally and ensure that existing business functions, such as Klaviyo forms and analytics reporting, work properly.

2. I don't want to use a server-side approach to integrate Klaviyo. My pages need to load forms and add various reporting scripts. Using a server-side approach would increase my development mental burden!

3. I hope to provide a complete, runnable project example, including proper integration of klaviyo.js, normal loading, and example code for proper data reporting.
