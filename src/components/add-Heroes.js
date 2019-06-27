import React from 'react';

export default class AddHeroes extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            hero_tier:'',
            hero_skill:'',
            hero_skill_description:'',
            alliance:'',
        }
    }

    render(){
        return(
            <div>
                <p>Add more heroes</p>
            </div>
        )
    }
}