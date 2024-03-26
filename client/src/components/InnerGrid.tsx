import styles from '../assets/Grid.module.css';

const InnerGrid = () => {
    return ( 
        <div>   
            <div className={`${styles.gridItemInner}`}>1</div>
            <div className={`${styles.gridItemInner}`}>2</div>
        </div>
)
};

export default InnerGrid;