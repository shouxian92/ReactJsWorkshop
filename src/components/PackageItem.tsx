import * as React from "react";

export interface PackageItemState { expanded: boolean }
export interface SetSelectionFunc {
  (index: number): void
}

export interface PackageItemProps {
  index: number,
  setSelection: SetSelectionFunc,
  data: any
}

export class PackageItem extends React.Component<PackageItemProps, PackageItemState> {

    constructor(props: PackageItemProps) {
        super(props); // calling of base class
        this.state = { expanded: false } // setting value of expanded to false initially
        this.toggleExpandState = this.toggleExpandState.bind(this);
        this.packageItemClicked = this.packageItemClicked.bind(this);
    }

    toggleExpandState() {
        let currentState = this.state.expanded;
        // cannot do this.state.expanded = !itself because react will not know
        // react will think that it is updating a variable instead
        // using this method will make the rendering successful
        this.setState({ expanded: !currentState });
    }

  render() {
    let pkg = this.props.data; // A single package.

    let description: string = pkg.description;
    let expanderText = "collapse";
    if(!this.state.expanded) { 
        description = description.substr(0, 140) + "...";
        expanderText = "expand";
    } else {
        expanderText = "collapse";
    }

    return (<div className="ItemContainer">
      <div className="ItemLeftPanel">
        <img className="PackageIcon" src="/resources/icons/package.png" />
      </div>
      <div className="ItemRightPanel">
        <div className="DescExpanderText" onClick={ this.packageItemClicked }>x</div>
        <div className="PackageCaption">{ pkg.name }
          <span className="PackageVersion">{ pkg.versions[0].version }</span>
        </div>
        <div className="PackageAuthor">{ pkg.maintainers[0].username }</div>
        <div className="PackageDescription">{ description }</div>

        <div className="DescExpanderText" onClick={ this.toggleExpandState }>{ expanderText }</div>
      </div>
    </div>);
  }

  packageItemClicked() {
    this.props.setSelection(this.props.index);
  }
}