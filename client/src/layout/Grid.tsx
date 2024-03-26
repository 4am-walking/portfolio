import styles from '../assets/Grid.module.css';
import InnerGrid from '../components/InnerGrid';

const Grid = () => {
    return (
        <div className={`${styles.gridContainerMain}`}>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
            <div className={`${styles.gridItemMain}`}><InnerGrid /></div>
        </div>
    )
};

export default Grid;