import React, { Component } from 'react';
import styles from './GlassItem.module.css';
import g1 from '../asset/g1.jpg';
import g2 from '../asset/g2.jpg';
import g3 from '../asset/g3.jpg';
import g4 from '../asset/g4.jpg';
import g5 from '../asset/g5.jpg';
import g6 from '../asset/g6.jpg';
import g7 from '../asset/g7.jpg';
import g8 from '../asset/g8.jpg';
import g9 from '../asset/g9.jpg';

export default class GlassItem extends Component {
   
  
    render() {
        
        return (
            <div
             className={styles.row}>
                <div
                 className={styles.col}>
                    <img src={g1} alt="glass"
                        onClick={() => this.props.setSelectedGlass(1)}
                    />
                    
                </div>
                <div 
                
                className={styles.col}>
                    <img src={g2} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(2)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g3} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(3)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g4} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(4)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g5} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(5)}
                    />
                </div>

                <div className={styles.col}>
                    <img src={g6} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(6)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g7} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(7)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g8} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(8)}
                    />
                </div>
                <div className={styles.col}>
                    <img src={g9} alt="glass" 
                        onClick={() => this.props.setSelectedGlass(9)}
                    />
                </div>
            </div>
        )
    }
}
