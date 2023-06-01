import React,{ Component } from 'react';

class ExampleComponent extends Component{
  
  constructor(props) {
    super(props)
    console.log('Constructor Çalıştı')
    this.state = {
      message: 'Merhaba Dünya'
    }
  }

  componentDidMount() {
    console.log('ComponentDidMount çalıştı')
  }


  componentDidUpdate() {
    console.log('ComponentDidUpdate çalıştı')
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount çalıştı')
  }

  render() {
    console.log('çalıştı')
    return(

      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.setState({message: 'Güle Güle Dünya'})}>Güncelle</button>
      </div>

    )
  }
}



export default ExampleComponent;
