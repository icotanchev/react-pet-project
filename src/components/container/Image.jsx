import React from 'react'
import {Button} from "../presentational/Button";

class Image extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      pictureURLs: [
        "https://www.formula1.com/content/dam/fom-website/sutton/2018/Abu%20Dhabi%20Test/Day%20Two/dcd1828no555.jpg.transform/9col/image.jpg",
        "https://image.redbull.com/rbcom/052/2018-08-24/71d3e959-1a86-4036-b25e-3560ad45940b/0012/0/0/123/576/987/1500/1/f1-2018-red-bull.png",
        "https://d2d0b2rxqzh1q5.cloudfront.net/sv/1.67/dir/2bf/image/2bf8c21145ea2a579b9fc9a802087c92.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1LJPwAR47Lqe6ZsBXbhI1xlWVCz6KDQ6JrEpk8QSgWvsRRNV"
      ],
      src: '',
      showAddBtn: true,
      additionalButtons: false
    };

    this.changePicture = this.changePicture.bind(this);
    this.randomPicture = this.randomPicture.bind(this);
    this.addNewButtons = this.addNewButtons.bind(this);
  }

  changePicture() {
    let newPicture = this.randomPicture();
    while (newPicture === this.state.src) {
      newPicture = this.randomPicture()
    }

    this.setState({ src: newPicture });
  }

  randomPicture() {
    return this.state.pictureURLs[Math.floor(Math.random() * this.state.pictureURLs.length)]
  }

  addNewButtons() {
    this.setState(
      {
        additionalButtons: !this.state.additionalButtons,
        showAddBtn: !this.state.showAddBtn
      }
    )
  }

  render() {
    return(
      <div>
        <div>
          <img className="Image" alt='' src={this.state.src} />
        </div>
        <div>
          <Button name="Picture 1" picture={this.changePicture} description="Picture 1"/>
          <Button name="Picture 2" picture={this.changePicture} description="Picture 2"/>
          <Button name="Picture 3" picture={this.changePicture} description="Picture 3"/>
          <Button name="ADD" picture={this.addNewButtons} description="ADD additional button" visibility={this.state.showAddBtn}/>
          <Button name="Picture 4" picture={this.changePicture} description="Picture 4" visibility={this.state.additionalButtons}/>
          <Button name="REMOVE" picture={this.addNewButtons} description="Remove additional button" visibility={this.state.additionalButtons}/>
        </div>
      </div>
    );
  }
}

export default Image;
