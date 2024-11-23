# BookManagementAppAngular16

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Create the modules

`ng generate module home`

## Generate the component for created module

`ng generate component home --module=home`

## Generate the reservation service inside the reservation folder

`ng generate service reservation/reservation`

## Generating the reservation model interface

`ng generate interface models/reservation`

## Generate the environment files

```bash
ng g environments

// Then this will create a environment.ts and environment.development.ts files
// We need to run ng serve as bellow wo get development values

ng serve --configuration=development
```
