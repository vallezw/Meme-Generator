import React from "react"

 class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"

        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes})
            })
    }
    
    handleChange(){
        event [name] = event.target(value)

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form">   
                    <input 
                        name="topText"  
                        placeholder="Top Text" 
                        type="text" 
                        onChange={this.handleChange} 
                        value = {this.state.topText}
                    />

                    <input 
                        name="bottomText" 
                        palceholder="Bottom Text" 
                        type="text" 
                        onChange={this.handleChange} 
                        value = {this.state.bottomText}
                    />

                    <button>Gen</button>
                </form>
            </div>
        )
    }
 }

 export default MemeGenerator