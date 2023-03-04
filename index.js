import express from 'express'
import perroRoutes from './src/routes/perro.routes.js'

async function main(){
    // try {
    //     await sequelize.sync({ force: false }) // Se conecta a la base y si no la encuentra, la crea. Si se cambia a True, borra la tabla y crea todo de nuevo.
    //     await sequelize.authenticate()
    //     console.log('Conexión exitosa :)')
    //   } catch (e) {
    //     console.log(e)
    //   }
    
      const app = express()
      app.use(express.json())
    //   app.use(express.urlencoded({ extended: false }))
    //   app.use(zooRoutes)
      app.listen(3000)
      console.log('Server listening on port 3000')
}

main()
