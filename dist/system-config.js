// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md
/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'primeng': 'vendor/primeng',
    'primeui': 'vendor/primeui'
};
/** User packages configuration. */
var packages = {
    'primeng': {
        'primeng': 'cjs'
    },
    'primeui': {
        'primeui': 'cjs'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'app',
    'app/form-elements/core/checkboxes',
    'app/form-elements/core/radios',
    'app/form-elements/core/select',
    'app/form-elements/extended/reportingfigures',
    'app/form-elements/extended/primaryexcess',
    'app/form-elements/extended/companytype',
    'app/form-elements/extended/lobs',
    'app/form-elements/extended/offices',
    'app/form-elements/extended/uw',
    'app/form-elements/extended/regions-set',
    'app/form-elements/extended/regions',
    'app/form-elements/extended/countries',
    'app/form-elements/extended/form-error',
    'app/form-elements/extended/type-of-view',
    'app/form-elements/extended/run-report',
    'app/form-elements/extended/market-company',
    'app/form-elements/extended/market-company/market-co',
    'app/form-elements/extended/market-company/local-policies',
    'app/form-elements/extended/us-exposed',
    'app/form-elements/extended/operations',
    'app/form-elements/extended/business',
    'app/forms/showroom',
    'app/forms/showroom2',
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
    'app/forms/monthly-comparison'
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
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
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map