# HealthAlert country roll out - Website

This is a dynamic responsive website written in next.js
Next.js is a React framework allowing developers to easily setup configured builds and production ready web applications without extensive [react.js](https://reactjs.org/) knowledge itself.

You need basic javascript knowledge, a [node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) installation
[Read next.js docs here](https://nextjs.org/docs)

<br/>

### QA Link

http://healthalert.static.qa.p16n.org

<br/>

This website is no longer just **static** even though the repo title suggests - the application now supports the dynamic querying of the content.

The data is currently pulled locally within the project at `data/_data.js` and surfaced through an api endpoint e.g.http://healthalert.static.qa.p16n.org/api/countries. The api endpoint directory is `pages/api/countries.js`

## Running the site locally

Make sure you have installed node, npm globally:

`$ cd to country-healthalert-static`
`$ npm install`
`$ npm run dev`

Or

For production:

`$ npm run build`
`$ npm run start`


**Page tree:**

* `pages/components/dataContext` - allows us to pass data and methods to other
components, the data is provided from the _app.js component
* `pages/components/layout.js` - Layout component defining modules ie. header is occurs across all pages
    * `pages/components/layout.module.scss` - Layout components styles
* `pages/countries/[rollout].js` - is a dynamic page where page route(links) is dependant on external data e.g. All put country pages content uses this template and displays content from `data/_data.js`.  [See next.js documentation](https://nextjs.org/learn/basics/dynamic-routes/page-path-external-data)
* `pages/_app.js` - Is the index / global component automatically shared to all other components, this is where global data states can be managed, globals styles added etc.
* `pages/_document.js` - [See next.js documentation](https://nextjs.org/docs/advanced-features/custom-document)
* `pages/*.js` -  other page components
* `public/*` - is the assets resources directory

## Country services have the following listing:

* Sierra Leone
* Ethiopia
* Bangladesh
* Madagascar
* Mozambique
* Timor-leste
* Uganda
