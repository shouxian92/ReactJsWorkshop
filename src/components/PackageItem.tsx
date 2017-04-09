import * as React from "react";

export interface PackageItemProps {
    data: any
}

export class PackageItem extends React.Component<PackageItemProps, undefined> {
    render() {
        let pkg = this.props.data; // A single package.
        let latest = pkg.versions[0]; // Latest version info.
        let maintainer = pkg.maintainers[0];

        return (<div className="ItemContainer">
            <div className="ItemLeftPanel">
                <img className="PackageIcon" src="/resources/icons/package.png" />
            </div>
            <div className="ItemRightPanel">
                <div className="PackageCaption">{ pkg.name }<span className="PackageVersion">{ latest.version }</span></div>
                <div className="PackageAuthor">by { maintainer.username }</div>
                <div className="PackageDescription">{ pkg.description }</div>
            </div>
        </div>);
    }
}
