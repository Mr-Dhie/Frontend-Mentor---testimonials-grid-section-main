import React from "react"
import './testimonial.css'
import Card from '../../component/card/card'
import data from '../../data'
import qoute from '../../assets/images/bg-pattern-quotation.svg'


const testimonial = () =>{
    return(
        <div className=" testimonial__container">
            <div className="testimonial__container-first">
                <div className="testimonial__container-first-child1">
                    <div className=" violet radius margin-right" style={{ zIndex: '1',position: 'relative'}}>
                        <img id="qoute" src={qoute} alt="qoute" style={{ zIndex: '-1' }} />
                        <Card {...data[0]}/>
                    </div>
                    <div className=" grey radius"><Card {...data[1]}/></div>
                </div>

                <div className="testimonial__container-first-child2">
                    <div className="radius margin-right"><Card {...data[2]}/></div>
                    <div className=" dark radius"><Card {...data[3]}/></div>
                </div>
            </div>
            <div className="testimonial__container-second radius">
                    <div><Card {...data[4]}/></div>
            </div>
        </div>
    )
}

export default testimonial