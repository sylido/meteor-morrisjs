Package.describe({
  name          : "sylido:morrisjs",
  version       : "0.5.4",
  summary       : "Charting library Morris.js v0.5.1",
  git           : "https://github.com/sylido/meteor-morrisjs.git",
  documentation : "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@3.2.2");

  api.use(["jquery", "clubfest:raphael@1.0.0"]);

  api.addFiles([
    "morris.js",
    "morris.css"
  ], "client");
});
