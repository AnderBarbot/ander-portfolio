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
deploy!

section work
about: Large Picture+Timeline.
experience: larger basic. x translation. 
work: modal change, smoother transitions
guestbook: persistent storage

## other todos
HeroDrawer - Gone?

theme - create my own

guestbook text: People matter. You matter. I appreciate your time and attention. Leave me a note so I can give you some in return. your note affects the default theme

transitions/animations

spotify last played
last seen map pin

blue page

Ideas: hover = side highlight for side scroll, bar selector w a box that follows the mouse (when its in the box) and has additional physics (adds entertainment factor, custom scroll bar (transitions, me doing things...?). life timeline is clickable. nav bar. 
Overall: (make a small, good product. not a big, mediocre one. ) animations?

## process
techstack decisions

frontend
React - it's a standard in the industry and I wanted to deepen my frontend fluency with it. Plus, it has a great ecosystem.
Next.js - I was drawn to the simplified routing. I was also intrigued by the flexible rendering options and built-in performance optimization.
Tailwind - better modularity and configurabilty = faster development and easier maintenance. It also streamlined the css and markup context switch. 
DaisyUI - prebuilt components = faster development and more flexibilty. 

deployment
Supabase - open source = easy self-hosting transition. postgreSQL+auto generated API's = quicker development. generous free tier.
Vercel - Next.js support + git integration = minimal, elegant, and efficient deployment


Development itself
getting set up and familiar with the framework was a bit of a bear, as expected. Thankfully next provides a basic app template so I jumped right into the getting started docs and played around with the installation versions.
Eventually I had my own basic website I had scraped together from the documentation started rolling pretty quickly. I was working towards a elegant landing page with dynamic features, with further information being found on separate pages. 
Eventually I had a passble website. I did some more research, found new inspiration and decided to change tacts. I wanted one elegant page, not multiple mediocre ones. 

Roadblocks
ThemeSwitcher - context switching between the active theme and the previewed theme was tough and I couldn't find documentation about it. I ended up creating a distinction between the clickable and the inner box. Intially it was a sketchy solution, but I fiddled with it until it felt smooth and well polished. 

