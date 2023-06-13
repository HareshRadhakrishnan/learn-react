const NavBar = () => {
    const home ="/"
    const create ='/create'
    const account ="/account"
    return ( <nav className="navbar">
        <h1>Cosmos</h1>
        <a href={home}>Home</a>
        <a href={create}>New Product</a>
        <a href={account}>Profile</a>
    </nav> );
}
 
export default NavBar;