// @ts-nocheck
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '@pages/Home';
import { FormPage } from '@pages/FormPage';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorComponent } from '@components/Error/error';

const App = () => {

  return (
    <BrowserRouter>
      <div className="container">
        <ErrorBoundary FallbackComponent={ErrorComponent!}>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/form" component={FormPage} exact />
          </Switch>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
};

export default App;
