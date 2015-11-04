angular-ladda-umd
=======================

```
npm install --save angular-ladda-umd
```

```
<button class="btn btn-submit" ladda="vm.loading" ng-disabled="!vm.form.$valid" data-style="expand-right" type="submit">
  {{'signup' | translate}}
</button>
```

Notice that we bound the `ladda` property to an angular expression (`vm.loading`), which is toggled in the controller with
true or false values to show or hide the loader.


All the options regarding style and ladda configuration remain intact, please refer to the official documentation.

# UMD

This is an [UMD](https://github.com/umdjs/umd) package.

# License

Do whatever you please with this.
