import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux'
// import { bindActionCreators } 'redux'
// import * as actions from '../../store/actions'

export default class App extends Component {
    static propTypes = {
         pacotes: PropTypes.array.isRequired
        // adicionaPacote: PropTypes.func.isRequired
    }

    static defaultProps = {
        pacotes: []
    }


//   componentDidMount() {
//     this.props.adicionaPacote(1, 'Viagem para curitiba') 
//   }

  render() {
         const { pacotes } = this.props

        return (
            <div>
                <p>sdhasjdhjasdh</p>
               <pre>{JSON.stringify(pacotes, undefined, 2)}</pre>
            </div>           
        )
  }

}