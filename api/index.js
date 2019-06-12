import express from 'express';
import bodyParser from 'body-parser';

const {
  carRoutes,
  flagRoutes,
  userRoutes,
  orderRoutes
} = require('./server/routes/index');
 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1', carRoutes);
app.use('/api/v1/flags', flagRoutes);
app.use('/api/v1/auth', userRoutes);
app.use('/api/v1/orders', orderRoutes);

const port = process.env.PORT || 8008;
app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});
export default app;
