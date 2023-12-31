import { Navbar, Layout } from "../components";
import Footer from "../components/Footer";

const withLayout = (Page: React.FC<any>, title?: string) => {
  return function PageWithNavbar(props) {
    return (
      <>
        <Navbar />
        <Layout title={title || `${props.event.name} - Citronics'24`} />
        <Page {...props} />
        <Footer />
      </>
    );
  };
};

export default withLayout;
