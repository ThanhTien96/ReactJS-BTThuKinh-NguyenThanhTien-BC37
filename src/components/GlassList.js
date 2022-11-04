import React, { Component } from 'react'
import GlassItem from './GlassItem'
import styles from './GlassList.module.css'
import models from '../asset/model.jpg'

import v1 from '../asset/v1.png'
import v2 from '../asset/v2.png'
import v3 from '../asset/v3.png'
import v4 from '../asset/v4.png'
import v5 from '../asset/v5.png'
import v6 from '../asset/v6.png'
import v7 from '../asset/v7.png'
import v8 from '../asset/v8.png'
import v9 from '../asset/v9.png'






export default class GlassList extends Component {

    glass = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": v1,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": v2,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": v3,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": v4,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": v5,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": v6,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": v7,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": v8,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": v9,
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]

    state = { selectedGlass:  {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "url": v1,
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }, }

    setSelectedGlass = (id) => {
        const findGlass = this.glass.find(item => id === item.id)

        this.setState({
            selectedGlass: findGlass,
        }, () => this.state.selectedGlass)
    }



    render() {

        return (
            <div className={styles.body}>
                <div className={styles.header}>
                    <h1>try glasses app online</h1>
                </div>

                <div className="col">

                    <div className={styles.model}>
                        <img src={models} alt="" />
                        <div>
                            <div className={styles.glassDetail}>
                                <h4>{this.state.selectedGlass.name}</h4>
                                <p>{this.state.selectedGlass.desc}</p>
                                <p>{this.state.selectedGlass.price + " $"}</p>
                            </div>
                            <div className={styles.glassTry}>
                                <img src={this.state.selectedGlass.url} alt="glass" />
                            </div>
                        </div>
                    </div>

                    <GlassItem setSelectedGlass={this.setSelectedGlass} />
                </div>
            </div>
        )
    }
}
