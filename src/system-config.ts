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
  'app/checkboxes',
  'app/radios',
  'app/select',
  'app/showroom',
  'app/showroom2',
  'app/reportingfigures',
  'app/primaryexcess',
  'app/companytype',
  'app/lobs',
  'app/offices',
  'app/uw',
  'app/groupscountriesregions',
  'app/groups',
  'app/regions',
  'app/countries',
  'app/form-error',
  'app/broker-meeting',
  'app/fac-out-portfolio',
  'app/submission-volume-overview',
  'app/portfolio-analysis-report',
  'app/underwriting-activity',
  'app/claims-activity',
  'app/claims-volume-overview',
  'app/gross-written-premium',
  'app/limit-exception',
  'app/lloyds-monitoring',
  'app/monthly-comparison'
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
