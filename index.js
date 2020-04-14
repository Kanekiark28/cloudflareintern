//Requirements:
//Make a fetch request to https://cfw-takehome.developers.workers.dev/api/variants,
//parse the JSONarray of URLs, save to a variable.
//From the two links, distribute Response between 1 or 2
//Extra Credit: title,h1#title,p#description,a#url


const url = 'https://cfw-takehome.developers.workers.dev/api/variants'
addEventListener("fetch", (event) => {
  //remove request
  event.respondWith(handleRequest());
});
/**
 * Fetch response, convert it to json
 * @param {String} url
 */
async function handleRequest() {
  //parse json in variable
  const { variants } = await fetch(url)
    .then(res => res.json())
  //return 1 or 2 50% of the time 
  return new Response(variants[Math.random() >= 0.5 ? 0 : 1], {
    headers: { 'content-type': 'text/plain' },
  })
}

