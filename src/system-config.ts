// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
};

/** User packages configuration. */
const packages: any = {
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/form-elements/core/checkboxes',
  'app/form-elements/core/radios',
  'app/form-elements/core/select',
  'app/forms/showroom',
  'app/forms/showroom2',
  'app/form-elements/extended/reportingfigures',
  'app/form-elements/extended/primaryexcess',
  'app/form-elements/extended/companytype',
  'app/form-elements/extended/lobs',
  'app/form-elements/extended/offices',
  'app/form-elements/extended/uw',
  'app/form-elements/extended/regions-set',
  'app/form-elements/extended/regions',
  'app/form-elements/extended/countries',
  'app/form-elements/form-error',
  'app/forms/broker-meeting',
  'app/forms/fac-out-portfolio',
  'app/forms/submission-volume-overview',
  'app/forms/portfolio-analysis-report',
  'app/forms/underwriting-activity',
  'app/forms/claims-activity',
  'app/forms/claims-volume-overview',
  'app/forms/gross-written-premium',
  'app/forms/limit-exception',
  'app/forms/lloyds-monitoring',
  'app/forms/monthly-comparison',
  'app/forms-element/extended/type-of-view',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
