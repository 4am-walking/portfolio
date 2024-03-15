import Navbar from "../components/Navbar";

const Layout = ({ children }: any) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    )
}

export default Layout;