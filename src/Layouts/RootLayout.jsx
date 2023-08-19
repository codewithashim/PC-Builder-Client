import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const RootLayout = ({ children }) => {
    return (
        <main className="container">
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default RootLayout;