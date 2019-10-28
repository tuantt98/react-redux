import React, { Component } from 'react'
import { connect } from 'react-redux'


class Item extends Component {

    useEditStatusInStore = () => {
        var {dispatch} = this.props
        dispatch({
            type:'CHANGE_EDIT_STATUS'
        })
    }

    addNewiTem =() => {
        var {dispatch} = this.props
        dispatch({
            type:'ADD_ITEM',
            newItem: 7
        })
    }

    deleteItem = ()=>{
        var {dispatch} = this.props
        dispatch({
            type:'DELETE_ITEM',
            index: 0
        })
    }
    render() {
        console.log('Render Item.........')
        return (
            <div>
                <h2>Component Item</h2>
                <button onClick={ ()=> this.useEditStatusInStore() }>Thay đổi trạng thái</button>
                <button onClick={()=> this.addNewiTem()}>Thêm</button>
                <button onClick={ ()=> this.deleteItem() }>Xoá</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        editStatus: state.editStatus,
        num: state.num
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         useEditStatusInStore: () => {
//             dispatch( {type:'CHANGE_EDIT_STATUS'})
//         }
//     }
// }

export default connect(mapStateToProps)(Item)