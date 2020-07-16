import * as React from "react";
import AceEditor from 'react-ace'; // aceのreact　componentを使います。

import 'brace/mode/markdown'; // modeを選ぶ
import 'brace/theme/textmate';

interface IProps {
    value: string;
    edit(text: string): void;
}

interface IState {
}

//正規表現リテラル
var h1 = /#/;
var h2 = /##/;
var h3 = /###/;

export type EditorProps = {
    fileType: string;
    coontents: string;
    readOnly: boolean;
    onChange?: (content: string) => void;
    theme?: string;
}

class Editor extends React.Component<IProps, IState>{
    editor: AceEditor;
    constructor(props: any) {
        super(props);
        this.editor = new AceEditor(props);
        this._onChangeEvent = this._onChangeEvent.bind(this);
    }

    render() {
        return (
            <div>
                <AceEditor
                    mode="markdown"
                    theme="textmate"
                    name="editor"
                    tabSize={2}
                    showPrintMargin={false}
                    highlightActiveLine={false}
                    editorProps={{$blockScrolling: true}}
                    onChange={this._onChangeEvent}
                    value={this.props.value}
                />
            </div>
        )
    }

    //値変更時のイベント
    _onChangeEvent(text: string): void{
        this.props.edit(text);
    }

/*    _onLoadEvent(editor: AceEditor): void{
        this.editor = editor;
    }*/
}

export default Editor;
