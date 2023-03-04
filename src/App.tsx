import useRouteElement from './routes/useRouteElement';

function App() {
  const routeElements = useRouteElement();

  return <div>{routeElements}</div>;
}

export default App;
