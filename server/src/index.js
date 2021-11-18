import createApp from './app';

const app = createApp();
const port = 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});