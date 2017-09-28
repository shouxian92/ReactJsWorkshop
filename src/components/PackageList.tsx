import * as React from "react";
import { PackageItem } from "./PackageItem";

export interface PackageListProps { packages: any }
export interface PackageListState { currentIndex: number }

export class PackageList extends React.Component<PackageListProps, PackageListState> {
    
    callbackFunction(index: number) {
        this.setState({ currentIndex: index });
    }

    constructor(props: PackageListProps) {
        super(props); // calling of base class
        this.state = { currentIndex: 0 } 
        this.callbackFunction = this.callbackFunction.bind(this);
    }
    
    render() {
        let packageElements: JSX.Element[] = [];
        this.props.packages.map((pkg: any, i : number) => packageElements.push(
            <PackageItem index={ i } setSelection={ this.callbackFunction } data={ pkg } />
        ));

        return (<div>
            Selected item: { this.state.currentIndex }<br/>
            { packageElements }</div>);
    }
}