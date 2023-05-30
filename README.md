# Pokedex - Daniel Imal

## Getting Started

To install dependencies:

```
$ yarn install
```

To start the dev server:

```
$ yarn dev
```

A server will start on http://localhost:5173/

## Notes

I think that all the required functionality was completed. I added a little CSS to improve the layout, but I'm not a designer, so that's the best I could come up with. I also added a quick and dirty autocomplete using a `<datalist>`, so the user doesn't need to remember every single Pokemon name exactly. Some things to note:

- The requirements said to provide guidance on running in a concurrent environment. I admit, this is very difficult for me to imagine without specifics.
  - I suppose, if another process were to subscribe to the same queries while a user is in the process of entering text or viewing a detail page, then they could possibly cause the data being viewed (in the datalist or the detail view) to change at the time it's being viewed, which would be jarring. To mitigate this, understanding the rules of RTKQuery's caching logic would be important, so that we're sure we know that the caches for the datalist and detail views are only used by those views or another view that couldn't request it at same the time.
  - The only piece of data with possible write-contention would be `search.searchTerm`, since it can be written to from `SearchHistory` and `SearchField`. But although Redux allows for concurrency, it's still single-threaded and so there's no parallelism, so the last write will always win. From a user interface perspective, the last user action probably _should_ win, so this seems fine to me.
- I would probably normally implement navigating to items in the search history a bit differently, but I didn't want to break out of the rules of the exercise. Instead of implementing each item as a button that updates the Redux store, a better implementation would be for each Pokemon detail page to live at a route like `/pokemon/bulbasaur`, then simply link to that.
- I noticed that RTKQuery is still hitting the API whenever you go back to an earlier item in history, even though it should be using the same cache key. I spent a little while looking into that, but wasn't able to sort it out in a reasonable amount of time. (FYI, this is the first time I used RTKQuery instead of rolling my own logic. I tried it specifically because I thought it would be nice to have automatic caching. Maybe I'm reading the docs wrong 🤷‍♂️?)
- I also noticed that the `getAll` service seems to sometimes be polling for updates even though I didn't think I have it configured to do that. Clearly, I'd spend some more time reading the docs before putting something like this into prod, so I understand exactly how this cache is working.
- I disabled the `exhaustive-deps` linting on one line. I've always been on the fence about this lint rule. If I left it in and added `getAll` to the dependency array, the `getAll` query would fire a lot more than it should, because `getAll` seems to be created anew on each render. But then I wonder why RTKQuery doesn't give me a stable reference to `getAll` by default. So, this is something else I'd probably dig into a bit more, too, to find a cleaner solution.
- I left a little bit of duplicated logic in `PokemonDetail` for rendering lists of items as a comma-deliminated list. Two places have copy-pasted code with slight modifications to handle different data. I originally thought I'd keep it DRY and break out a separate component, but when I looked at what was necessary to handle the different shape of the data passed in, I thought it was harder to understand than the duplicated code. So, this is the kind of thing that I'd leave duplicated and hope I or some one else thinks of a better abstraction for reuse later, instead of going forward with an ugly abstraction now.
- The HTML in `PokemonDetail` is a rough attempt at being semantic (and probably better for accessibility), but I didn't do any testing to ensure it actually _is_ better. For example, definition lists are semantically meant to be used for key/value information, but I don't really know if screen readers work better with this format or not. So I'd probably do some quick testing with VoiceOver to see how this scans before I went ahead and built extensive CSS around it.
