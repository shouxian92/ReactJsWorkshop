/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { PackageItem } from "./components/PackageItem";
import { PackageList } from "./components/PackageList";

// Download the locally hosted data type json file.
fetch("/packages")
  .then(function (response: Response) {
    return response.text();
  }).then(function (jsonString) {
    let completeJson = JSON.parse(jsonString);
    let packagesArray = completeJson.content;
    ReactDOM.render(
      <PackageList packages = { packagesArray }/>,
      document.getElementById("myPlaceholder")
    );
});