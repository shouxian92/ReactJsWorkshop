import * as React from "react";

export interface PackageItemProps { data: any }
export interface PackageItemState { expanded: boolean }

export class PackageItem extends React.Component<PackageItemProps, PackageItemState> {

    constructor(props: PackageItemProps) {
        super(props); // Must call base class
        this.state = { expanded: false }; // Assign initial state
        this.toggleExpandState = this.toggleExpandState.bind(this);
    }

    toggleExpandState() {
        let currentState = this.state.expanded;
        this.setState({ expanded: !currentState }); // Toggle boolean value
    }

    render() {
        let pkg = this.props.data; // A single package.
        let latest = pkg.versions[0]; // Latest version info.
        let maintainer = pkg.maintainers[0];

        let expanderText = "collapse";
        let description: string = pkg.description;
        if (!this.state.expanded) {
            expanderText = "expand";
            description = description.substr(0, 140) + "...";
        }

        return (<div className="ItemContainer">
            <div className="ItemLeftPanel">
                <img className="PackageIcon" src="/resources/icons/package.png" />
            </div>
            <div className="ItemRightPanel">
                <div className="PackageCaption">{ pkg.name }<span className="PackageVersion">{ latest.version }</span></div>
                <div className="PackageAuthor">by { maintainer.username }</div>
                <div className="PackageDescription">{ description }</div>
                <div className="DescExpanderText" onClick={ this.toggleExpandState }>[{ expanderText }]</div>
            </div>
        </div>);
    }
}
