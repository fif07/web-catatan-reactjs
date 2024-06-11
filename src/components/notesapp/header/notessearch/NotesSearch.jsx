import React, { Component } from 'react'

export default class NotesSearch extends Component {
 constructor(props){
    super(props)

    this.state = {
        keyword: ''
    }

    this.onKeywordChange = this.onKeywordChange.bind(this)
 }

 onKeywordChange(e){
    this.setState({ keyword: e.target.value }, () => {
      this.props.searchNotes(this.state)
    })
 }
  
 render() {
    return (
      <div className='note-search'>
         <input type="text" placeholder="Cari catatan" value={this.state.keyword} onChange={this.onKeywordChange} />
      </div>
    )
  }
}
