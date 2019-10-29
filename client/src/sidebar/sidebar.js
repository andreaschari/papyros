import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem/sidebarItem';

class SidebarComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            addingNote: false,
            title: null
        };
    }
    render(){

        const {notes, classes, selectedNoteIndex} = this.props;

        return(
        <div className={classes.SidebarContainer}>
            <Button
                onClick = {this.newNoteBtnClick}
                className = {classes.newNoteBtn}
            >
                {
                    this.state.addingNote ? 'Cancel' : 'New note'
                }
            </Button>
            {
                this.state.addingNote ? 
                <div>
                    <input type='text'
                     className={classes.newNoteInput}
                    placeholder='Enter note title.'
                    onKeyUp = {(e) => this.updateTitle(e.target.value)}>
                    </input>
                    <Button 
                    className={classes.newNoteSubmitBtn}
                    onClick={this.newNote}>
                        Submit Note.
                    </Button>
                </div> : 
                null
            }
        </div>
        );
    }

    newNoteBtnClick = () =>{
        console.log("New Button Clicked!");
        this.setState({title: null, addingNote: !this.state.addingNote});
    }

    updateTitle = (txt) =>{
        console.log("here it is: ", txt);
    }

    newNote = () =>{
        console.log(this.state)
        // TODO
    }
}

export default withStyles(styles)(SidebarComponent);