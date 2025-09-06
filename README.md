## Getting Started - developer
```bash
npm run dev
#or
yarn dev
```

then open [http://localhost:3000](http://localhost:3000)

## Resources
buiding the app
[`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts), specifically [Geist](https://vercel.com/font)
[Next.js Documentation](https://nextjs.org/docs)
[Learn Next.js](https://nextjs.org/learn)
[the Next.js GitHub repository](https://github.com/vercel/next.js)

deployment
[Vercel Deployment](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)
[Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying)


## TODO
theme selector changes- sun/moon inside of list dropdown. color dongles.

draw hero section. 
make it hide on scroll past the about section, to return on hover.

make section components


new theme creation (languages/destination/website callbacks)


theme - day/night. create my own. rounded-selector? fab transition. smaller selection (not dropdown, but color palette selectors OR single column, wide, w colored slots). persistent
guestbook text: People matter. You matter. I appreciate your time and attention. Leave me a note so I can give you some in return. your note affects the default theme 




## process
Framework Decision.
React - it's a standard in the industry and I wanted to deepen my frontend fluency with it. Plus, it has a great ecosystem.
Next.js - I am quite comfortable with a react backend, thanks to my senior project, and was drawn to the simplified routing. I was also intrigued by the flexible rendering options and built-in performance optimization.
Tailwind - better modularity and configurabilty = faster development and easier maintenance. It also streamlined the css and markup context switch. 
DaisyUI - prebuilt components = faster development and more flexibilty. 

Development itself
getting set up and familiar with the framework was a bit of a bear, as expected. Thankfully next provides a basic app template so I jumped right into the getting started docs and played around with the installation versions.
Eventually I had my own basic website I had scraped together from the documentation started rolling pretty quickly. I was working towards a elegant landing page with dynamic features, with further information being found on separate pages. 
Eventually I had a passble website. I did some more research, found new inspiration and decided to change tacts. I wanted one elegant page, not multiple mediocre ones. 

Roadblocks
ThemeSwitcher - context switching between the active theme and the previewed theme was tough and I couldn't find documentation about it. I ended up creating a distinction between the clickable and the inner box. Intially it was a sketchy solution, but I fiddled with it until it felt smooth and well polished. 

