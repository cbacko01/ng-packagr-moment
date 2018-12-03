# PackageTestNg7App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6 following [this guide: Creating a Library with Angular CLI](https://blog.angularindepth.com/creating-a-library-in-angular-6-87799552e7e5).

This project contains:

1. A **package** located in `/projects/package-test-ng7/`.
2. A **project** located in `src/`, which is used to test the package.

## Working with the Package

See `package.json` for a list of common commands. 

There are 2 ways to work with packages, which we'll call "dev mode" and "package mode." 

In each case, you'll need to install dependencies for both the package and project:

```
npm i
(cd projects/package-test-ng7/ && npm i)
```

After following the steps below, you can test your changes using the developer server: `ng serve`.

### Dev Mode

Dev mode facilitates quick testing.

You can run the package script `build_lib` or `build_lib_watch`, the latter of which will trigger a build on changes to the package source code.

Your package will not need to be listed as a project dependency. 

In this mode, your project will need to have all of the _package's_ dependencies installed.

### Package Mode

Package mode does a full package build. 

Running a full build is a manual process. Use the package script `package`. 

Your compiled package's `.tgz` file will need to be listed as a dependency in your project's `package.json`. 

In this mode, your project will need to have all of the _package's_ dependencies installed.

