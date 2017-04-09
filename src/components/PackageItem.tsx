import * as React from "react";

export interface PackageItemProps {
    data: any
}

export class PackageItem extends React.Component<PackageItemProps, undefined> {
    render() {
        let pkg = this.props.data; // A single package.

        return (<div className="ItemContainer">
            <div className="ItemLeftPanel">
                <img className="PackageIcon" src="/resources/icons/package.png" />
            </div>
            <div className="ItemRightPanel">
                <div className="PackageCaption">{ pkg.name }<span className="PackageVersion">1.0.1</span></div>
                <div className="PackageAuthor">by Ellensi</div>
                <div className="PackageDescription">Bla bla bla...</div>
            </div>
        </div>);
    }
}
