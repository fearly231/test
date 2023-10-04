import React from 'react'
import './ProgressBar.css'
import bar1z5 from '../img/assets/1z5.png'
import bar2z5 from '../img/assets/2z5.png'
import bar1z2 from '../img/assets/1z2.png'
import bar3z5 from '../img/assets/3z5.png'
import bar4z5 from '../img/assets/4z5.png'
import bar9z10 from '../img/assets/9z10.png'

const ProgressBar = (props) => {
    const [img, setImg] = React.useState(null);

    const handleBar = () => {
        if(props.data[0]===1){
            setImg(bar1z5);
        } else if (props.data[0]===2){
            setImg(bar2z5);
        } else if (props.data[0]===3){
            setImg(bar1z2);
        } else if (props.data[0]===4){
            setImg(bar3z5);
        } else if (props.data[0]===5){
            setImg(bar4z5);
        } else {
            setImg(bar9z10);
        }
    }

    React.useEffect(() => {
        handleBar();
    }, [img])
    

    return (
        <div className="progress-bar-wrapper">
            <img src={img} alt="pasek zaawansowania"/>
            <div className="progress-bar-description">{props.data[1]}</div>
        </div>
    )
}

export default ProgressBar
