import "./index.scss"

const Footer = () => { 
    return (
        <section id="contact" className="footer flex flex-column flex-center">
            <h2>Contact</h2>
            <section className="form-section">
                <form action="https://getform.io/f/f01ad0e7-25b2-4d8f-96f9-2a1585793365" method="POST">
                    <input type="text" name="Name" placeholder="Name"/>
                    <input type="email" name="E-mail" placeholder="E-mail" />
                    <textarea name="Message" id="" className="textarea"  placeholder="Message"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
        </section>
    )
 }


 export default Footer