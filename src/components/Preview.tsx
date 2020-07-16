import React from "react";
import marked from "marked";

interface IProps {
    data: string;
}

interface IState {

}
var Latex = require('react-latex');

class Preview extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
    }

    // text = <Latex>this.props.data</Latex>;
    // lines = this.props.data.concat();
    render(){
        return(
            <div id={"preview"}
                dangerouslySetInnerHTML={{__html: marked(this.props.data)}} // reactは標準では、HTMLがエスケープされてしまうので、エスケープされないようにしないといけない。
            >
            </div>
        )
    }
}

export default Preview;
