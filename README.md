# Forms

## Pending Log

- Form service spec missing
- highlight function for Widget sons, make it abstract
- core select component needs spec file
- test changes in select behavior
- finish options and business widgets
- check all cases for Countries widget with All and custom

## Intro

The idea is to have a set of basic components like:

```html
<radios [data]="myJson"></radios>
<checkboxes [data]="myJson"></chekboxes>
<my-select [data]="myJson" [multi]="true"></my-select>
<my-select [data]="myJson" [multi]="false"></my-select>
```

## Sets of Values

For a given set of values we can get as an output 1 or N values.

## Testing

```bash
ng build
ng test --build=false
```

## Functionalities

- getJson
- resetFieldsets
- getValues

[angular-cli](./docs/angular-cli.md)

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.8.
