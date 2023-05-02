const Contacts = () => {
    return (
        <>
        <main className="section">
        <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Amsterdam, Holland</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+31629276572">+380637129387 UA<br />+31629276572 NL</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="lavrovdmitrii@gmail.com">lavrovdmitrii@gmail.com</a></p>
                    </li>
                </ul>

        </div>
        </main>
        </>
    )
}

export default Contacts;

