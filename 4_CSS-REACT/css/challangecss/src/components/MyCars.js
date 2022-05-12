import styles from "./MyCars.module.css"
const MyCars = ({marca, modelo, cor}) => {

  return (
    <div className={styles.my_whrapper}>
        <h1 className={styles.my_style_title}>Marca: {marca}</h1>
        <p className={styles.my_style_paragraph}>Modelo: {modelo}</p>
        <p className={styles.my_style_paragraph}>Cor: {cor}</p>
    </div>
  )
}

export default MyCars