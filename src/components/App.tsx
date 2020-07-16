import * as React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import './stylesheet.css';

interface IProps {

}

interface IState {
    value: string;
}

class App extends React.Component<IProps, IState> {
    constructor(props: any){
        super(props);
        this._edit = this._edit.bind(this); // ES6のthisバインドされない問題があるので.bind(this)
        this.state = {value: ""}
    }

    render(){
        return(
            <div className="clearfix" id="app">
                <h1>Markdown Editor</h1>
                <div className="flex">
                    <div className="element">
                        <Editor value={this.state.value} edit={this._edit} />
                    </div>
                    <div className="element">
                        <Preview data={this.state.value}/>
                    </div>
                </div>
            </div>
        )
    }

    _edit(text: string){
        this.setState({ value: text })
    }
}

export default App;
