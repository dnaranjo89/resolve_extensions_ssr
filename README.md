## Render in cliente
```
npm start
```

## Render in server
```
npm run build && npm run serve
```

## The problem
There seem to be a problem when resolving imports without an extension. It finds the .scss file instead of the .jsx.
Specifying the extension on import or removing conlicting files (i.e. Header.scss) solves the issue.

I would like to keep using imports without extension, as I normally do in CRA.