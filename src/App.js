import './App.css';
import Layout from './components/Layout';
import CustomThemeProvider from './CustomThemeProvider';

function HomePageContent() {
  return <h1>the main content home page </h1>;
}
// function AboutPageContent() {
//   return <h1>"about page content"</h1>;
// }

function App() {
  return (
    <CustomThemeProvider>
      <Layout>
        <h1><HomePageContent /></h1>
      </Layout>
    </CustomThemeProvider>
  );
}

export default App;
