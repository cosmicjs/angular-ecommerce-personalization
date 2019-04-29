# Cosmic Customization Website

![Angular Company Website](https://cosmic-s3.imgix.net/6bdb6590-ffc9-11e8-9a9c-8b349df2e2bf-smartmockups_jpoc1svl.jpg?w=1200)
### [View Demo](https://cosmicjs.com/apps/xxxx)

This repository showcases the use of Angular with [Cosmic JS](cosmicjs.com), a headless CMS service, to create a ecommerce website customization sample.

## How to install
1. Install demo content via the Cosmic JS website:
https://cosmicjs.com/apps/xxxxx

2. Install the code locally:
```
git clone https://github.com/cosmicjs/xxxxx
```

3. Once you've got your Cosmic JS Bucket installed, fill the data on the `environment` files as follows:
```
{
  production: true|false,
  read_key: 'COSMIC_READ_KEY',
  write_key: 'COSMIC_WRITE_KEY',
  bucket_slug: 'BUCKET_SLUG',
  URL: 'https://api.cosmicjs.com/v1/',
  presets: 'YOUR_PRESETS_OBJECT_SLUG'
}
```
The `cosmic interceptor` will make sure to send the read and write keys when communicating with the CMS.

You can also run the following command to quickstart the application:
```
COSMIC_BUCKET=your-bucket-slug COSMIC_WRITE_KEY=your-bucket-write-key COSMIC_READ_KEY=your-bucket-read-key npm start
```

# Angular CLI

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
