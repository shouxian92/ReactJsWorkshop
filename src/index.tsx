/// <reference path="../node_modules/@types/node/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import { PackageItem } from "./components/PackageItem";

// Download the locally hosted data type json file.
fetch("/packages")
    .then(function (response: Response) {
        return response.text();
    }).then(function (jsonString) {

        let completeJson = JSON.parse(jsonString);
        let firstPackage = completeJson.content[0];
        
        ReactDOM.render(
            <PackageItem data={ firstPackage } />,
            document.getElementById("myPlaceholder")
        );
    });
