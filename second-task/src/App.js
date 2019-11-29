import React, {Component} from 'react';
import Form from "./components/AddItem/Form/Form";
import Items from "./components/AddItem/Items/Items";
import nanoid from 'nanoid'
import './App.css'
class App extends Component {
    state = {
        text: '',
        number: 0,
        id: '',
        texts: [],
        total: 0,
    };
    changeText = event => {
      this.setState({text: event.target.value});
    };
    changeNum = event => {
        this.setState({number: event.target.value});
    };
    addText = (e) => {
        e.preventDefault();

        if (this.state.text === '' || this.state.number === 0) {
            alert('Вы ничего не ввели')
        } else  {
            const texts = [...this.state.texts];
            let total = this.state.total;
            texts.push({name: this.state.text, num: this.state.number, id: nanoid()});
            total += parseInt(this.state.number);
            this.setState({texts, text: '', total});

        }

    };
    removeText = id => {
        const itemIndex = this.state.texts.findIndex(t => t.id === id);
        const item = [...this.state.texts];
        let total = this.state.total;
        total -= parseInt(this.state.number);
        item.splice(itemIndex,1);
        this.setState({texts:item, total})
    };
    render() {


        return (
            <div className='main'>
                <Form
                    onChange = {this.changeText}
                    text = {this.state.text}
                    onsubmit = {this.addText}
                    onChangeNum = {this.changeNum}
                />
                {this.state.texts.length > 0 ?   <div className='block'>
                    {this.state.texts.map((text) => (
                        <Items
                            key = {text.id}
                            text = {text.name}
                            num={text.num}
                            remove={()=>this.removeText(text.id)}
                            total={this.state.total}
                        />
                    ))}
                    {<p>Total spent: <b>{this.state.total}</b></p>}

                </div>: null}

            </div>
        );
    }
}

export default App;